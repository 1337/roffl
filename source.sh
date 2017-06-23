# Find the directory containing this script.
export PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Add NPM binaries to path.
export PATH="$PROJECT_ROOT/node_modules/.bin:$PATH"
