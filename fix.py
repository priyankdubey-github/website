import re
import sys

with open('hero.html', 'r', encoding='utf-8') as f:
    hero_content = f.read()

# Extract orbit container which is everything from <!-- BEGIN OrbitContainer --> 
# up until the <div class="relative z-10 max-w-5xl mx-auto text-center"> which is HeroContent.
orbit_match = re.search(r'(<!-- BEGIN OrbitContainer -->.*?)(<div class="relative z-10 max-w-5xl mx-auto text-center)', hero_content, re.DOTALL)

if not orbit_match:
    print("orbit could not be matched")
    sys.exit(1)

orbit_html = orbit_match.group(1).rstrip() + "\n"

with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# The target in index.html is the line ending in:
# shadow-[0_0_120px_rgba(99,102,241,0.4)] backdrop-blur-2xl pointer-events-none"></div>
# and the start of the hero content:
# <div class="relative z-10 max-w-5xl mx-auto text-center hero-content">
target = '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full border border-white/10 shadow-[0_0_120px_rgba(99,102,241,0.4)] backdrop-blur-2xl pointer-events-none"></div>'

next_div = '<div class="relative z-10 max-w-5xl mx-auto text-center hero-content">'

if target in index_content and next_div in index_content:
    # Do replacement
    index_content = index_content.replace(f'{target}\n\n      \n\n      {next_div}', f'{target}\n\n      {orbit_html}\n\n      {next_div}')
    index_content = index_content.replace(f'{target}\n\n      {next_div}', f'{target}\n\n      {orbit_html}\n\n      {next_div}')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(index_content)
    print("SUCCESS")
else:
    print("could not find target in index.html")

