/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditArtboardPresetViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    confirm<R = void, P0 = unknown>(_confirm: P0): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    confirmButton<R = NSButton>(): R;
    setConfirmButton<R = void, P0 = NSButton>(_v: P0): R;
    delegate<R = MSEditArtboardPresetViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSEditArtboardPresetViewControllerDelegate>(_v: P0): R;
    preset<R = MSArtboardPreset>(): R;
    setPreset<R = void, P0 = MSArtboardPreset>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSEditArtboardPresetViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarDelegateProtocol {
      alloc<R = MSEditArtboardPresetViewController>(): R;
      new: <R = MSEditArtboardPresetViewController>() => R;
    }
  }
}

declare const MSEditArtboardPresetViewController: cocoa.MSEditArtboardPresetViewController.CLASS;
