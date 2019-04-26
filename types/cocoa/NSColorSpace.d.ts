/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSpace<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    _newCGColorByConvertingCGColor<R = CGColor, P0 = CGColor>(__newCGColorByConvertingCGColor: P0): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    colorSpaceName<R = unknown>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    isWideGamut<R = boolean>(): R;
    allowsExtendedRange<R = boolean>(): R;
    _isDeviceColorSpace<R = boolean>(): R;
    colorProfile<R = unknown>(): R;
    _createProfileFor<R = void, P0 = __CFString>(__createProfileFor: P0): R;
    dealloc<R = void>(): R;
    initWithColorSyncProfile<R = unknown, P0 = void>(_initWithColorSyncProfile: P0): R;
    initWithICCProfileData<R = unknown, P0 = unknown>(_initWithICCProfileData: P0): R;
    initWithCGColorSpace<R = unknown, P0 = CGColorSpace>(_initWithCGColorSpace: P0): R;
    _initWithCGColorSpaceNoCache<R = unknown, P0 = CGColorSpace>(__initWithCGColorSpaceNoCache: P0): R;
    initWithColorProfile<R = unknown, P0 = unknown>(_initWithColorProfile: P0): R;
    localizedName<R = NSString>(): R;
    colorSpaceModel<R = number>(): R;
    numberOfColorComponents<R = number>(): R;
    colorSyncProfile<R = void>(): R;
    CGColorSpace<R = CGColorSpace>(): R;
    ICCProfileData<R = NSData>(): R;
    colorGamut<R = NSColorGamut>(): R;
  
}
  namespace NSColorSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSColorSpace>(): R;
      new: <R = NSColorSpace>() => R;
      availableColorSpacesWithModel<R = unknown, P0 = number>(_availableColorSpacesWithModel: P0): R;
      colorSpaceForColorSpaceName<R = unknown, P0 = unknown>(_colorSpaceForColorSpaceName: P0): R;
      _invertedDeviceGrayColorSpace<R = unknown>(): R;
      _invertedGenericGrayColorSpace<R = unknown>(): R;
      extendedLinearSRGBColorSpace<R = unknown>(): R;
      linearSRGBColorSpace<R = unknown>(): R;
      extendedGenericGamma22GrayColorSpace<R = unknown>(): R;
      extendedSRGBColorSpace<R = unknown>(): R;
      DCIP3ColorSpace<R = unknown>(): R;
      displayP3ColorSpace<R = unknown>(): R;
      genericGamma22GrayColorSpace<R = unknown>(): R;
      adobeRGB1998ColorSpace<R = unknown>(): R;
      sRGBColorSpace<R = unknown>(): R;
      deviceCMYKColorSpace<R = unknown>(): R;
      deviceGrayColorSpace<R = unknown>(): R;
      deviceRGBColorSpace<R = unknown>(): R;
      genericCMYKColorSpace<R = unknown>(): R;
      genericGrayColorSpace<R = unknown>(): R;
      genericRGBColorSpace<R = unknown>(): R;
      specialColorSpaceWithID<R = unknown, P0 = number>(_specialColorSpaceWithID: P0): R;
      // + NSColorSpace(Chocolat): 
      RGBColorSpaceNamed<R = unknown, P0 = unknown>(_RGBColorSpaceNamed: P0): R;
      // + NSColorSpace(Extensions): 
      colorSpaceForSketchColorSpace<R = unknown, P0 = number>(_colorSpaceForSketchColorSpace: P0): R;
    }
  }
}

declare const NSColorSpace: cocoa.NSColorSpace.CLASS;
