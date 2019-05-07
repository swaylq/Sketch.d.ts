/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyExternalColorPickerHostViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSLegacyExternalColorPickerHostViewControllerProtocol, NSRemoteViewDelegateProtocol, NSColorPickingInternalProtocol {
    preparePickerWithSandboxExtension_completionHandler<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_preparePickerWithSandboxExtension: P0, _completionHandler: P1): R;
    remoteView<R = unknown>(): R;
    description<R = unknown>(): R;
    initWithPickerMask_colorPanel_bundleURL<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithPickerMask: P0, _colorPanel: P1, _bundleURL: P2): R;
    _currentColor<R = NSColor>(): R;
    set_currentColor<R = void, P0 = NSColor>(_v: P0): R;
    pickerIdentifier<R = NSString>(): R;
    isActivePicker<R = boolean>(): R;
    setIsActivePicker<R = void, P0 = boolean>(_v: P0): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace NSLegacyExternalColorPickerHostViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSLegacyExternalColorPickerHostViewControllerProtocol, NSRemoteViewDelegateProtocol, NSColorPickingInternalProtocol {
      alloc<R = NSLegacyExternalColorPickerHostViewController>(): R;
      new: <R = NSLegacyExternalColorPickerHostViewController>() => R;
      warmup<R = void>(): R;
    }
  }
}

declare const NSLegacyExternalColorPickerHostViewController: cocoa.NSLegacyExternalColorPickerHostViewController.CLASS;
