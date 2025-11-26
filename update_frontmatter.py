#!/usr/bin/env python3
"""
Script to replace 'description:' or 'Description:' with ''og:description':' in MDX/MD frontmatter.
"""
import os
import re
from pathlib import Path


def update_frontmatter(file_path):
    """Update frontmatter in a single file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if file has frontmatter
    if not content.startswith('---'):
        return False

    # Split content into frontmatter and body
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False

    frontmatter = parts[1]
    body = parts[2]

    # Check if description or Description exists
    if not re.search(r'^(description|Description):', frontmatter, re.MULTILINE):
        return False

    # Replace description: or Description: with 'og:description':
    # Preserve the original indentation
    updated_frontmatter = re.sub(
        r'^(description|Description):',
        ''og:description':',
        frontmatter,
        flags=re.MULTILINE
    )

    # Only write if changes were made
    if updated_frontmatter == frontmatter:
        return False

    # Reconstruct the file
    updated_content = f"---{updated_frontmatter}---{body}"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    return True


def main():
    """Find and update all MDX and MD files."""
    root_dir = Path('/home/raeder/mintlify/chronosphere')

    # Find all .mdx and .md files
    files = list(root_dir.glob('**/*.mdx')) + list(root_dir.glob('**/*.md'))

    updated_files = []
    skipped_files = []

    for file_path in files:
        try:
            if update_frontmatter(file_path):
                updated_files.append(file_path)
                print(f"✓ Updated: {file_path}")
            else:
                skipped_files.append(file_path)
        except Exception as e:
            print(f"✗ Error processing {file_path}: {e}")

    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Updated: {len(updated_files)} files")
    print(f"  Skipped: {len(skipped_files)} files")
    print(f"{'='*60}")

    if updated_files:
        print("\nUpdated files:")
        for f in updated_files:
            print(f"  - {f.relative_to(root_dir)}")


if __name__ == "__main__":
    main()
