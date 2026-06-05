#!/usr/bin/env python3
"""Simple log analyzer: counts HTTP status codes in a log file.
Usage: python log_analyzer.py /path/to/logfile
"""
import argparse
import collections
import os
import re
import sys

RED = "\033[31m"
RESET = "\033[0m"

STATUS_RE = re.compile(r'"\s*[^\"]*"\s+(\d{3})\b')


def parse_args():
    p = argparse.ArgumentParser(description="Analyze HTTP status codes in a log file")
    p.add_argument("logfile", help="Path to log file (use - for stdin)")
    return p.parse_args()


def read_lines(path):
    if path == "-":
        return sys.stdin
    if not os.path.exists(path):
        print(f"Error: file '{path}' not found.", file=sys.stderr)
        sys.exit(1)
    try:
        return open(path, "r", encoding="utf-8", errors="replace")
    except OSError as e:
        print(f"Error opening file '{path}': {e}", file=sys.stderr)
        sys.exit(1)


def main():
    args = parse_args()
    counter = collections.Counter()
    with read_lines(args.logfile) as fh:
        for line in fh:
            m = STATUS_RE.search(line)
            if m:
                counter[m.group(1)] += 1

    total = sum(counter.values())
    if total == 0:
        print("No HTTP status codes found in the input.")
        return

    # Sort by descending count
    for code, cnt in sorted(counter.items(), key=lambda kv: kv[1], reverse=True):
        pct = round(cnt / total * 100)
        line = f"Status {code}: {cnt:,} requests ({pct}%)"
        try:
            code_int = int(code)
        except ValueError:
            code_int = 0
        if code_int >= 400:
            print(f"{RED}{line}{RESET}")
        else:
            print(line)


if __name__ == "__main__":
    main()
