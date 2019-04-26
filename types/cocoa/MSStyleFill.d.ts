/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleFill<T0 = void, T1 = void, T2 = void> extends _MSStyleFill, MSImageOwnerProtocol {
    NSImage<R = unknown>(): R;
    setOpacity<R = void, P0 = number>(_setOpacity: P0): R;
    hasOpacity<R = boolean>(): R;
    setPatternTileScale<R = void, P0 = number>(_setPatternTileScale: P0): R;
    CSSAttributeString<R = unknown>(): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = CGSize>(): R;
    interfaceOpacity<R = number>(): R;
    setInterfaceOpacity<R = void, P0 = number>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
    // + MSStyleFill(BlendingView): 
    wantsColorModePicker<R = boolean>(): R;
    // + MSStyleFill(EqualAppearance): 
    hasEqualAppearance<R = boolean, P0 = unknown>(_hasEqualAppearance: P0): R;
    // + MSStyleFill(Interface): 
    parentStyle<R = unknown>(): R;
    // + MSStyleFill(Previewing): 
    configureFillForPreview<R = void, P0 = unknown>(_configureFillForPreview: P0): R;
    // + MSStyleFill(Interface):
    interfaceOpacity<R = number>(): R;
    setInterfaceOpacity<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSStyleFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleFill, MSImageOwnerProtocol {
      alloc<R = MSStyleFill>(): R;
      new: <R = MSStyleFill>() => R;
      keyPathsForValuesAffectingInterfaceOpacity<R = unknown>(): R;
      // + MSStyleFill(Interface): 
      keyPathsForValuesAffectingInterfaceOpacity<R = unknown>(): R;
    }
  }
}

declare const MSStyleFill: cocoa.MSStyleFill.CLASS;
