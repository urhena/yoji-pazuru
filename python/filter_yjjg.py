import sys, re, json

with open(sys.argv[1], "r") as read_file, open(sys.argv[2], "w") as write_file:
    match = re.findall('<keb>([一-龯][一-龯][一-龯][一-龯])</keb>.*?<misc>&yoji', read_file.read(), re.S)
    json.dump(match, write_file)