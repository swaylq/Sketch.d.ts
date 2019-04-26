/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPreset<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    oppositeOrientationPreset<R = unknown>(): R;
    initWithDictionaryRepresentation<R = unknown, P0 = unknown>(_initWithDictionaryRepresentation: P0): R;
    initWithName_size_imageName<R = unknown, P0 = unknown, P1 = CGSize, P2 = unknown>(_initWithName: P0, _size: P1, _imageName: P2): R;
    resizeScaleFromArtboardSize<R = number, P0 = CGSize>(_resizeScaleFromArtboardSize: P0): R;
    matchWithArtboardSize<R = number, P0 = CGSize>(_matchWithArtboardSize: P0): R;
    isNew<R = boolean>(): R;
    setIsNew<R = void, P0 = boolean>(_v: P0): R;
    isSizeToFit<R = boolean>(): R;
    tooltip<R = NSString>(): R;
    imageName<R = NSString>(): R;
    setImageName<R = void, P0 = NSString>(_v: P0): R;
    allowResizedMatching<R = boolean>(): R;
    offersLandscapeVariant<R = boolean>(): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    image<R = NSImage>(): R;
    sizeDescription<R = NSString>(): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    layerName<R = NSString>(): R;
  }
  namespace MSArtboardPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSArtboardPreset>(): R;
      new: <R = MSArtboardPreset>() => R;
      sizeToFitPresetWithName_size<R = unknown, P0 = unknown, P1 = CGSize>(_sizeToFitPresetWithName: P0, _size: P1): R;
      resizeScaleFromArtboardSize_presetSize_offeringLandscapeVariant<R = number, P0 = CGSize, P1 = CGSize, P2 = boolean>(_resizeScaleFromArtboardSize: P0, _presetSize: P1, _offeringLandscapeVariant: P2): R;
      compareArtboardSize_withScaledPresetSize_offeringLandscapeVariant<R = number, P0 = CGSize, P1 = CGSize, P2 = boolean>(_compareArtboardSize: P0, _withScaledPresetSize: P1, _offeringLandscapeVariant: P2): R;
    }
  }
}

declare const MSArtboardPreset: cocoa.MSArtboardPreset.CLASS;
