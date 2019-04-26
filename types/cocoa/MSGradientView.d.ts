/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    prepareForDisplay<R = void>(): R;
    prepareDefaults<R = void>(): R;
    gradient<R = NSGradient>(): R;
    setGradient<R = void, P0 = NSGradient>(_v: P0): R;
    bottomBorder<R = boolean>(): R;
    setBottomBorder<R = void, P0 = boolean>(_v: P0): R;
    rightBorder<R = boolean>(): R;
    setRightBorder<R = void, P0 = boolean>(_v: P0): R;
    leftBorder<R = boolean>(): R;
    setLeftBorder<R = void, P0 = boolean>(_v: P0): R;
    topBorder<R = boolean>(): R;
    setTopBorder<R = void, P0 = boolean>(_v: P0): R;
    borderSize<R = number>(): R;
    setBorderSize<R = void, P0 = number>(_v: P0): R;
    gradientAngle<R = number>(): R;
    setGradientAngle<R = void, P0 = number>(_v: P0): R;
    borderColour<R = NSColor>(): R;
    setBorderColour<R = void, P0 = NSColor>(_v: P0): R;
    bottomColour<R = NSColor>(): R;
    setBottomColour<R = void, P0 = NSColor>(_v: P0): R;
    topColour<R = NSColor>(): R;
    setTopColour<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace MSGradientView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSGradientView>(): R;
      new: <R = MSGradientView>() => R;
    }
  }
}

declare const MSGradientView: cocoa.MSGradientView.CLASS;
