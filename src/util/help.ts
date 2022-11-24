export const printHelp = () => {
  console.log(`knip [options]

Options:
  -c/--config [file]     Configuration file path (default: ./knip.json, knip.jsonc or package.json#knip)
  -t/--tsConfig [file]   TypeScript configuration path (default: ./tsconfig.json)
  --production           Analyze only production source files (e.g. no tests, devDependencies, exported types)
  --workspace            Analyze a single workspace (default: analyze all configured workspaces)
  --include              Report only listed issue type(s), can be repeated
  --exclude              Exclude issue type(s) from report, can be repeated
  --no-progress          Don't show dynamic progress updates
  --max-issues           Maximum number of issues before non-zero exit code (default: 0)
  --reporter             Select reporter: symbols, compact, codeowners, json (default: symbols)
  --reporter-options     Pass extra options to the reporter (as JSON string, see example)
  --debug                Show debug output
  --debug-level          Set verbosity of debug output (default: 1, max: 3)
  --performance          Measure running time of expensive functions and display stats table

Issue types: files, dependencies, unlisted, exports, nsExports, classMembers, types, nsTypes, enumMembers, duplicates

Examples:

$ knip
$ knip --production
$ knip --workspace packages/client --include files
$ knip -c ./config/knip.json --reporter compact
$ knip --reporter codeowners --reporter-options '{"path":".github/CODEOWNERS"}'

More info: https://github.com/webpro/knip`);
};