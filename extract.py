import re

with open('hero.html', 'r', encoding='utf-8') as f:
    h = f.read()

open_tag = '<div class="absolute inset-0 pointer-events-none z-10" id="orbit-field">'
start_idx = h.find(open_tag)
if start_idx != -1:
    open_count = 0
    end_idx = -1
    for i in range(start_idx, len(h)):
        if h[i:i+4] == '<div':
            open_count += 1
        elif h[i:i+5] == '</div':
            open_count -= 1
            if open_count == 0:
                end_idx = i + 6
                break
    
    if end_idx != -1:
        orbit_html = h[start_idx:end_idx]
        
        with open('index.html', 'r', encoding='utf-8') as f:
            i_html = f.read()
            
        target = '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full border border-white/10 shadow-[0_0_120px_rgba(99,102,241,0.4)] backdrop-blur-2xl pointer-events-none"></div>'
        next_div = '<div class="relative z-10 max-w-5xl mx-auto text-center hero-content">'
        
        if target in i_html and next_div in i_html:
            # Also clear out any previously malformed orbit
            new_html = re.sub(r'<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full border border-white/10 shadow-\[0_0_120px_rgba\(99,102,241,0\.4\)\] backdrop-blur-2xl pointer-events-none\"></div>.*?<div class="relative z-10 max-w-5xl mx-auto text-center hero-content">', 
                              f'{target}\n\n      {orbit_html}\n\n      {next_div}', i_html, flags=re.DOTALL)
            
            with open('index.html', 'w', encoding='utf-8') as f:
                f.write(new_html)
            print("SUCCESS")
        else:
            print("TARGET OR NEXT DIV NOT FOUND")

    else:
        print("NO MATCHING CLOSING DIV")
else:
    print("OPEN TAG NOT FOUND")
