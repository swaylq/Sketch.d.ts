/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSpaceSliders<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderViewRequiredMethodsProtocol {
    requiredMinSize<R = CGSize>(): R;
    dealloc<R = void>(): R;
    takeColorSpaceFrom<R = void, P0 = unknown>(_takeColorSpaceFrom: P0): R;
    activeColorSpace<R = unknown>(): R;
    setActiveColorSpace<R = void, P0 = unknown>(_setActiveColorSpace: P0): R;
    finishProvideNewSubviewSetup<R = void>(): R;
    setMatchedColor<R = void, P0 = unknown>(_setMatchedColor: P0): R;
    fieldEditableControl<R = unknown>(): R;
  }
  namespace NSColorSpaceSliders {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderViewRequiredMethodsProtocol {
      alloc<R = NSColorSpaceSliders>(): R;
      new: <R = NSColorSpaceSliders>() => R;
    }
  }
}

declare const NSColorSpaceSliders: cocoa.NSColorSpaceSliders.CLASS;
