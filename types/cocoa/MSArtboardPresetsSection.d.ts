/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsSection<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    initWithName_presets<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _presets: P1): R;
    presets<R = NSArray>(): R;
    setPresets<R = void, P0 = NSArray>(_v: P0): R;
    name<R = NSString>(): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace MSArtboardPresetsSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArtboardPresetsSection>(): R;
      new: <R = MSArtboardPresetsSection>() => R;
      writeSections_toURL_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_writeSections: P0, _toURL: P1, _error: P2): R;
      sectionsWithContentsOfURL<R = unknown, P0 = unknown>(_sectionsWithContentsOfURL: P0): R;
    }
  }
}

declare const MSArtboardPresetsSection: cocoa.MSArtboardPresetsSection.CLASS;
