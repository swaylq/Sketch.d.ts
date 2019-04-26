/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNib<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    setInheritsDecodeTimeBundlePath<R = void, P0 = boolean>(_setInheritsDecodeTimeBundlePath: P0): R;
    inheritsDecodeTimeBundlePath<R = boolean>(): R;
    _loadNibDataFromPath<R = void, P0 = unknown>(__loadNibDataFromPath: P0): R;
    instantiateNibWithOwner_topLevelObjects<R = boolean, P0 = unknown, P1 = unknown>(_instantiateNibWithOwner: P0, _topLevelObjects: P1): R;
    _instantiateWithOwner_options_topLevelObjects<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__instantiateWithOwner: P0, _options: P1, _topLevelObjects: P2): R;
    instantiateWithOwner_topLevelObjects<R = boolean, P0 = unknown, P1 = unknown>(_instantiateWithOwner: P0, _topLevelObjects: P1): R;
    instantiateNibWithExternalNameTable<R = boolean, P0 = unknown>(_instantiateNibWithExternalNameTable: P0): R;
    _instantiateNibWithExternalNameTable_options<R = boolean, P0 = unknown, P1 = unknown>(__instantiateNibWithExternalNameTable: P0, _options: P1): R;
    _decoderWithZone<R = unknown, P0 = _NSZone>(__decoderWithZone: P0): R;
    _makeDecoderWithZone<R = unknown, P0 = _NSZone>(__makeDecoderWithZone: P0): R;
    _setReusableDecoder<R = void, P0 = unknown>(__setReusableDecoder: P0): R;
    _reusableDecoder<R = unknown>(): R;
    dealloc<R = void>(): R;
    _initWithPath_bundle<R = unknown, P0 = unknown, P1 = unknown>(__initWithPath: P0, _bundle: P1): R;
    initWithNibData_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithNibData: P0, _bundle: P1): R;
    _initWithNibNamed_bundle_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__initWithNibNamed: P0, _bundle: P1, _options: P2): R;
    initWithNibNamed_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithNibNamed: P0, _bundle: P1): R;
    initWithKeyedObjectsDataSettingBundleAtDecodeTime<R = unknown, P0 = unknown>(_initWithKeyedObjectsDataSettingBundleAtDecodeTime: P0): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
  }
  namespace NSNib {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSNib>(): R;
      new: <R = NSNib>() => R;
      _NSNibBindingHelpStringForUIItem_binding<R = unknown, P0 = unknown, P1 = unknown>(__NSNibBindingHelpStringForUIItem: P0, _binding: P1): R;
      _NSNibBindingDeprecationStringForUIItem<R = unknown, P0 = unknown>(__NSNibBindingDeprecationStringForUIItem: P0): R;
      getNibName_objectID_forUserInterfaceItem<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_getNibName: P0, _objectID: P1, _forUserInterfaceItem: P2): R;
      _NSNibObjectIDForUIItemIdentifier<R = unknown, P0 = unknown>(__NSNibObjectIDForUIItemIdentifier: P0): R;
      _NSNibShortcutNameForUIItemIdentifier<R = unknown, P0 = unknown>(__NSNibShortcutNameForUIItemIdentifier: P0): R;
      _NSNibPathForUIItemIdentifier<R = unknown, P0 = unknown>(__NSNibPathForUIItemIdentifier: P0): R;
      _NSNibPathForNibID<R = unknown, P0 = unknown>(__NSNibPathForNibID: P0): R;
      _NSNibRegisterNIBPath<R = unknown, P0 = unknown>(__NSNibRegisterNIBPath: P0): R;
    }
  }
}

declare const NSNib: cocoa.NSNib.CLASS;
