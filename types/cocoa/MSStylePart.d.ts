/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePart<T0 = void, T1 = void, T2 = void> extends _MSStylePart, NSCopyingProtocol, MSStylePartProtocol {
    parentLayer<R = unknown>(): R;
    parentStyle<R = unknown>(): R;
    multiplyBy<R = void, P0 = number>(_multiplyBy: P0): R;
    setValue_forUndefinedKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forUndefinedKey: P1): R;
    valueForUndefinedKey<R = unknown, P0 = unknown>(_valueForUndefinedKey: P0): R;
    topViewForColorInspector<R = unknown, P0 = unknown>(_topViewForColorInspector: P0): R;
    blendingViewForColorInspector<R = unknown, P0 = unknown>(_blendingViewForColorInspector: P0): R;
    previewImageForSize_colorSpace<R = unknown, P0 = CGSize, P1 = unknown>(_previewImageForSize: P0, _colorSpace: P1): R;
    configureFillForPreview<R = void, P0 = unknown>(_configureFillForPreview: P0): R;
    hasEqualAppearance<R = boolean, P0 = unknown>(_hasEqualAppearance: P0): R;
    isEnabled<R = boolean>(): R;
    // + MSStylePart(BlendingView): 
    wantsColorModePicker<R = boolean>(): R;
    // + MSStylePart(EqualAppearance): 
    hasEqualAppearance<R = boolean, P0 = unknown>(_hasEqualAppearance: P0): R;
    // + MSStylePart(Previewing): 
    previewImageForSize_colorSpace<R = unknown, P0 = CGSize, P1 = unknown>(_previewImageForSize: P0, _colorSpace: P1): R;
    configureFillForPreview<R = void, P0 = unknown>(_configureFillForPreview: P0): R;
  }
  namespace MSStylePart {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStylePart, NSCopyingProtocol, MSStylePartProtocol {
      alloc<R = MSStylePart>(): R;
      new: <R = MSStylePart>() => R;
      defaultStylePartForStyle<R = unknown, P0 = unknown>(_defaultStylePartForStyle: P0): R;
      stylesHaveEqualAppearance<R = boolean, P0 = unknown>(_stylesHaveEqualAppearance: P0): R;
      // + MSStylePart(EqualAppearance): 
      stylesHaveEqualAppearance<R = boolean, P0 = unknown>(_stylesHaveEqualAppearance: P0): R;
    }
  }
}

declare const MSStylePart: cocoa.MSStylePart.CLASS;
