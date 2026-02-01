# Execution Scripts

This directory contains deterministic Python and TypeScript scripts that handle the heavy lifting of client onboarding and site generation.

## Scripts

### `scrape_client_site.py`
Scrapes a client's existing website to extract content.

**Status:** To be implemented
**Dependencies:** playwright, beautifulsoup4

### `extract_brand_dna.py`
Uses LLM to analyze scraped content and generate Brand DNA configuration.

**Status:** To be implemented
**Dependencies:** openai, anthropic

### `build_site.ts`
Clones the master template and injects client-specific content.

**Status:** To be implemented
**Dependencies:** Node.js, fs-extra

## Development Guidelines

1. **Error Handling:** All scripts must handle errors gracefully and log to `.tmp/logs/`
2. **Idempotency:** Scripts should be safe to run multiple times
3. **Testing:** Each script should have a test mode that uses sample data
4. **Documentation:** Include inline comments and usage examples
