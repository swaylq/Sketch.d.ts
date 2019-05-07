/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFont<T0 = void, T1 = void, T2 = void> {
    // + NSFont(NSPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSFont(_NSAdvanceConvenience): 
    _trackingNecessaryToScaleToFontOfSize<R = number, P0 = number>(__trackingNecessaryToScaleToFontOfSize: P0): R;
    // + NSFont(ModelSyncSupport): 
    propertiesAreEqual<R = boolean, P0 = unknown>(_propertiesAreEqual: P0): R;
    // + NSFont(SVG): 
    addSVGAttributes<R = void, P0 = unknown>(_addSVGAttributes: P0): R;
    // + NSFont(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSFont(_NSAdvanceConvenience):
    _spaceGlyphAdvance<R = number>(): R;
  }
  namespace NSFont {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSFont(Chocolat): 
      fontPreventingAutoActivationWithName_size_bc<R = unknown, P0 = unknown, P1 = number>(_fontPreventingAutoActivationWithName: P0, _size_bc: P1): R;
      fontWithName_size_bc<R = unknown, P0 = unknown, P1 = number>(_fontWithName: P0, _size_bc: P1): R;
      setPreventsAutoActivation_bc<R = void, P0 = boolean>(_setPreventsAutoActivation_bc: P0): R;
      preventsAutoActivation_bc<R = boolean>(): R;
    }
  }
}

declare const NSFont: cocoa.NSFont.CLASS;
