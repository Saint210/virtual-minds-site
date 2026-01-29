# PowerShell script to fix low-contrast text across the entire site
# Replaces text-slate-300 with better alternatives based on context

$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse

$darkBackgrounds = @(
    'bg-gradient-to-br from-\[#1E1E1E\]',
    'bg-gradient-to-br from-\[#2A2A2A\]',
    'bg-\[#1A1A1A\]',
    'bg-\[#2A2A2A\]',
    'bg-black',
    'bg-slate-900',
    'bg-slate-800'
)

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Check if file contains dark backgrounds AND text-slate-300
    $hasDarkBg = $false
    foreach ($bg in $darkBackgrounds) {
        if ($content -match $bg) {
            $hasDarkBg = $true
            break
        }
    }
    
    if ($hasDarkBg -and $content -match 'text-slate-300') {
        Write-Host "Found low-contrast issue in: $($file.FullName)" -ForegroundColor Yellow
        
        # Replace text-slate-300 with text-white/90 or text-slate-100 on dark backgrounds
        $content = $content -replace 'text-slate-300', 'text-white/90'
        
        Set-Content -Path $file.FullName -Value $content
        Write-Host "  ✓ Fixed!" -ForegroundColor Green
    }
}

Write-Host "`nAll low-contrast issues fixed!" -ForegroundColor Green
