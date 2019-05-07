/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInProcessLegacyColorPickerLoadingTemplate<T0 = void, T1 = void, T2 = void> extends NSObject, _NSColorPickerTemplateProtocol {
    dealloc<R = void>(): R;
    initWithBundle<R = unknown, P0 = unknown>(_initWithBundle: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSInProcessLegacyColorPickerLoadingTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSColorPickerTemplateProtocol {
      alloc<R = _NSInProcessLegacyColorPickerLoadingTemplate>(): R;
      new: <R = _NSInProcessLegacyColorPickerLoadingTemplate>() => R;
    }
  }
}
