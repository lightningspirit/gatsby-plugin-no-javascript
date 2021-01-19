import { checkPathExclusion, checkPathInclusion } from './utilities'

describe('checkPathExclusion', (): void => {
  it('does the pathname match any of the exclusions', (): void => {
    expect(checkPathExclusion('/client/omegablerns', { excludePaths: /\/client/ })).toBeTruthy()
    expect(checkPathExclusion('/my-cool-page', { excludePaths: /\/my-cool-page/ })).toBeTruthy()
    expect(checkPathExclusion('/about/blerns', { excludePaths: /(\/client)|(\/tacos)/ })).toBeFalsy()
    expect(checkPathExclusion('/about/tacos', { excludePaths: /(\/client)|(\/about\/tacos)/ })).toBeTruthy()
    expect(checkPathExclusion('/blerkstorm', {})).toBeFalsy()
  })
})

describe('checkPathInclusion', (): void => {
  it('does the pathname match any of the inclusions', (): void => {
    expect(checkPathInclusion('/client/omegablerns', { includePaths: /\/client/ })).toBeTruthy()
    expect(checkPathInclusion('/my-cool-page', { includePaths: /\/my-cool-page/ })).toBeTruthy()
    expect(checkPathInclusion('/about/blerns', { includePaths: /(\/client)|(\/tacos)/ })).toBeFalsy()
    expect(checkPathInclusion('/about/tacos', { includePaths: /(\/client)|(\/about\/tacos)/ })).toBeTruthy()
    expect(checkPathInclusion('/blerkstorm', {})).toBeFalsy()
  })
})
