/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictationManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuItemValidationProtocol {
    _inputSourceRef<R = __TISInputSource>(): R;
    _dictationIsAllowed<R = boolean>(): R;
    _dictationIsEnabled<R = boolean>(): R;
    _dictationKeyChanged<R = void>(): R;
    _updateKeyEquivalentForMenuItem<R = void, P0 = unknown>(__updateKeyEquivalentForMenuItem: P0): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    dictationItemSelected<R = void, P0 = unknown>(_dictationItemSelected: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDictationManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuItemValidationProtocol {
      alloc<R = NSDictationManager>(): R;
      new: <R = NSDictationManager>() => R;
      createDictationMenuItem<R = unknown>(): R;
      isDictationSupported<R = boolean>(): R;
      defaultManager<R = unknown>(): R;
    }
  }
}

declare const NSDictationManager: cocoa.NSDictationManager.CLASS;
