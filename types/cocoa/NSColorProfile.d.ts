/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorProfile<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    hash<R = number>(): R;
    _isGenericProfile<R = number>(): R;
    _appropriateColorPanelSliderPane<R = number>(): R;
    _colorSyncProfileClass<R = number>(): R;
    _colorSyncProfileSpace<R = number>(): R;
    description<R = unknown>(): R;
    localizedName<R = unknown>(): R;
    MD5<R = void>(): R;
    ICCProfileData<R = unknown>(): R;
    colorSyncProfile<R = void>(): R;
    dealloc<R = void>(): R;
    initWithColorSyncInfo<R = unknown, P0 = void>(_initWithColorSyncInfo: P0): R;
    initWithICCProfileData<R = unknown, P0 = unknown>(_initWithICCProfileData: P0): R;
    initWithColorSyncProfile<R = unknown, P0 = void>(_initWithColorSyncProfile: P0): R;
  }
  namespace NSColorProfile {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSColorProfile>(): R;
      new: <R = NSColorProfile>() => R;
      availableProfiles<R = unknown>(): R;
    }
  }
}

declare const NSColorProfile: cocoa.NSColorProfile.CLASS;
