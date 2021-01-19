"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPathInclusion = exports.checkPathExclusion = void 0;
function testPath(pathname, pattern) {
    if (!pattern)
        return false;
    return RegExp(pattern).test(pathname);
}
function checkPathExclusion(pathname, pluginOptions) {
    return testPath(pathname, pluginOptions.excludePaths);
}
exports.checkPathExclusion = checkPathExclusion;
function checkPathInclusion(pathname, pluginOptions) {
    return testPath(pathname, pluginOptions.includePaths);
}
exports.checkPathInclusion = checkPathInclusion;
//# sourceMappingURL=utilities.js.map