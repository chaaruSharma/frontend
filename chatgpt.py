from urllib.parse import urlparse


def format_repos(urls):
    """
    Format a list of GitHub repository URLs into a markdown table.

    Args:
        urls (list[str]): List of GitHub repository URL strings.

    Returns:
        str: Markdown table containing repository information.

    Raises:
        ValueError: If a URL does not start with 'https://github.com/' or
                    does not contain a valid repository path.
    """
    rows = []

    for url in urls:
        if not isinstance(url, str) or not url.startswith("https://github.com/"):
            raise ValueError(f"Invalid GitHub URL: {url}")

        parsed = urlparse(url)
        path_parts = [part for part in parsed.path.strip("/").split("/") if part]

        if len(path_parts) < 2:
            raise ValueError(f"Invalid repository URL: {url}")

        repo_name = path_parts[1]

        repo_lower = repo_name.lower()
        if ".py" in repo_lower or "python" in repo_lower:
            language = "Python"
        elif ".js" in repo_lower or "javascript" in repo_lower or "node" in repo_lower:
            language = "JavaScript"
        elif "java" in repo_lower:
            language = "Java"
        elif "cpp" in repo_lower or "cxx" in repo_lower:
            language = "C++"
        elif "go" in repo_lower:
            language = "Go"
        elif "rust" in repo_lower:
            language = "Rust"
        else:
            language = "Unknown"

        rows.append((repo_name, language, "No"))

    table_lines = [
        "| Repo Name | Language | Is Fork |",
        "|-----------|----------|---------|",
    ]

    for repo_name, language, is_fork in rows:
        table_lines.append(f"| {repo_name} | {language} | {is_fork} |")

    return "\n".join(table_lines)


if __name__ == "__main__":
    example_urls = [
        "https://github.com/python/cpython",
        "https://github.com/nodejs/node",
        "https://github.com/openjdk/jdk",
    ]

    print(format_repos(example_urls))