import { PluginOptions } from './gatsby-ssr'

function testPath (pathname: string, pattern?: RegExp | string): boolean {
  if (!pattern) return false

  return RegExp(pattern).test(pathname)
}

export function checkPathExclusion (pathname: string, pluginOptions: PluginOptions): boolean {
  return testPath(pathname, pluginOptions.excludePaths);
}

export function checkPathInclusion (pathname: string, pluginOptions: PluginOptions): boolean {
  return testPath(pathname, pluginOptions.includePaths);
}
