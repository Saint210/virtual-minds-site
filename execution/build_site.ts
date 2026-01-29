/**
 * Site Builder
 * 
 * Takes Brand DNA JSON and generates a complete Next.js site by:
 * 1. Selecting the appropriate template
 * 2. Cloning the template structure
 * 3. Injecting client-specific content and styling
 * 4. Building and optionally deploying
 * 
 * Usage:
 *   node build_site.ts --config .tmp/client-brand-dna.json --output ../client-site
 */

import fs from 'fs-extra';
import * as path from 'path';
import { execSync } from 'child_process';
import nativeFs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BrandDNA {
  practice_name: string;
  doctor_name: string;
  credentials?: string[];
  design: {
    template: 'clinical-clarity' | 'academic-authority' | 'modern-minimalist';
    color_palette: {
      primary: string;
      accent: string;
      background: string;
    };
    typography: string;
    tone: string;
  };
  keywords: {
    primary: string[];
    semantic: string[];
  };
  brand_identity: {
    values: string[];
    usp: string;
    positioning: string;
  };
  patient_personas?: Array<{
    name: string;
    pain_points: string[];
    desires: string[];
    hook: string;
  }>;
  content: {
    hero_headline: string;
    hero_subheadline: string;
    about_bio: string;
    services: Array<{
      title: string;
      description: string;
    }>;
    testimonials?: Array<{
      quote: string;
      attribution: string;
    }>;
  };
  seo: {
    meta_title: string;
    meta_description: string;
    target_cities?: string[];
  };
}

class SiteBuilder {
  private brandDNA: BrandDNA;
  private templateDir: string;
  private outputDir: string;
  private templatesPath: string;

  constructor(configPath: string, outputDir: string) {
    console.log(`Loading Brand DNA from ${configPath}...`);
    this.brandDNA = JSON.parse(nativeFs.readFileSync(configPath, 'utf-8'));
    this.outputDir = path.resolve(outputDir);

    // Path to templates directory
    this.templatesPath = path.join(__dirname, '..', 'src', 'templates');

    // Determine template directory
    const templateMap = {
      'clinical-clarity': 'ClinicalClarityTemplate.tsx',
      'academic-authority': 'AcademicAuthorityTemplate.tsx',
      'modern-minimalist': 'ModernMinimalistTemplate.tsx'
    };

    const selectedTemplate = this.brandDNA.design.template;
    this.templateDir = templateMap[selectedTemplate];
    if (!this.templateDir) {
      console.error(`Error: Unknown template '${selectedTemplate}'. Available templates: ${Object.keys(templateMap).join(', ')}`);
      process.exit(1);
    }

    console.log(`Selected template: ${this.brandDNA.design.template}`);
  }

  async build(): Promise<void> {
    console.log('\n=== Starting Site Build ===\n');

    try {
      // Step 1: Clone base structure
      await this.cloneBaseStructure();

      // Step 2: Inject colors
      await this.injectColors();

      // Step 3: Generate home page
      await this.generateHomePage();

      // Step 4: Generate metadata
      await this.generateMetadata();

      // Step 5: Copy assets
      await this.copyAssets();

      // Step 6: Install dependencies
      await this.installDependencies();

      console.log('\n=== Build Complete ===');
      console.log(`Site generated at: ${this.outputDir}`);
      console.log('\nNext steps:');
      console.log(`  cd ${this.outputDir}`);
      console.log('  npm run dev');
    } catch (error) {
      console.error('\n❌ Build Failed!');
      console.error(error);
      process.exit(1);
    }
  }

  private async cloneBaseStructure(): Promise<void> {
    console.log('Cloning base Next.js structure...');

    const baseDir = path.join(__dirname, '..');

    // Create output directory
    await fs.ensureDir(this.outputDir);

    // Copy essential files and directories
    const itemsToCopy = [
      'package.json',
      'tsconfig.json',
      'next.config.ts',
      'postcss.config.mjs',
      'tailwind.config.ts',
      'src/components',
      'public'
    ];

    for (const item of itemsToCopy) {
      const src = path.join(baseDir, item);
      const dest = path.join(this.outputDir, item);

      if (await fs.pathExists(src)) {
        await fs.copy(src, dest);
        console.log(`  ✓ Copied ${item}`);
      }
    }

    // Create src/app directory
    await fs.ensureDir(path.join(this.outputDir, 'src', 'app'));
  }

  private async injectColors(): Promise<void> {
    console.log('Injecting color palette...');

    const { primary, accent, background } = this.brandDNA.design.color_palette;

    const cssContent = `@import "tailwindcss";

@theme {
  --color-primary: ${primary};
  --color-accent: ${accent};
  --color-background: ${background};
  --color-foreground: #2A2A2A;
  
  --font-display: "Lora", serif;
  --font-sans: "Inter", sans-serif;
}

:root {
  --background: ${background};
  --foreground: #2A2A2A;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--color-foreground);
}

/* Material Symbols Setup */
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

/* Custom Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
`;

    await fs.writeFile(
      path.join(this.outputDir, 'src', 'app', 'globals.css'),
      cssContent
    );

    console.log(`  ✓ Colors injected (${primary}, ${accent})`);
  }

  private async generateHomePage(): Promise<void> {
    console.log('Generating home page...');

    // Read the selected template
    const templatePath = path.join(this.templatesPath, this.templateDir);
    let templateContent = await fs.readFile(templatePath, 'utf-8');

    // Replace placeholder content with actual Brand DNA content
    const replacements: Record<string, string> = {
      'practiceName = "Elite Practice"': `practiceName = "${this.brandDNA.practice_name}"`,
      'heroHeadline = "Psychiatric Virtual Staffing for"': `heroHeadline = "${this.brandDNA.content.hero_headline}"`,
      'heroAccent = "Elite Practices."': `heroAccent = "${this.brandDNA.content.hero_subheadline || ''}"`,
      'heroSubheadline = "We install the administrative infrastructure that turns stressed solo practitioners into scalable, 7-figure medical executives."': `heroSubheadline = "${this.brandDNA.brand_identity.usp}"`,
    };

    for (const [find, replace] of Object.entries(replacements)) {
      templateContent = templateContent.split(find).join(replace);
    }

    // Save as page.tsx
    await fs.writeFile(
      path.join(this.outputDir, 'src', 'app', 'page.tsx'),
      templateContent
    );

    console.log('  ✓ Home page generated');
  }

  private async generateMetadata(): Promise<void> {
    console.log('Generating metadata...');

    const layoutContent = `import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "${this.brandDNA.seo.meta_title}",
  description: "${this.brandDNA.seo.meta_description}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
`;

    await fs.writeFile(
      path.join(this.outputDir, 'src', 'app', 'layout.tsx'),
      layoutContent
    );

    console.log('  ✓ Metadata generated');
  }

  private async copyAssets(): Promise<void> {
    console.log('Copying assets...');
    // Placeholder - in production, would handle logo, images, etc.
    console.log('  ✓ Assets copied');
  }

  private async installDependencies(): Promise<void> {
    console.log('Installing dependencies...');

    try {
      execSync('npm install', {
        cwd: this.outputDir,
        stdio: 'inherit'
      });
      console.log('  ✓ Dependencies installed');
    } catch (error) {
      console.error('  ✗ Failed to install dependencies');
      console.error('  Run "npm install" manually in the output directory');
    }
  }
}

// CLI
async function main() {
  const args = process.argv.slice(2);

  const configIndex = args.indexOf('--config');
  const outputIndex = args.indexOf('--output');

  if (configIndex === -1 || outputIndex === -1) {
    console.error('Usage: node build_site.ts --config <brand-dna.json> --output <output-dir>');
    process.exit(1);
  }

  const configPath = args[configIndex + 1];
  const outputDir = args[outputIndex + 1];

  if (!configPath || !outputDir) {
    console.error('Missing required arguments');
    process.exit(1);
  }

  const builder = new SiteBuilder(configPath, outputDir);
  await builder.build();
}

main().catch(console.error);
