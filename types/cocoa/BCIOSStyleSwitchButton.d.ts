/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCIOSStyleSwitchButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = void>(): R;
    moveLayer_toX<R = void, P0 = unknown, P1 = number>(_moveLayer: P0, _toX: P1): R;
    performAnimated_block<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_performAnimated: P0, _block: P1): R;
    layerWithImageNamed<R = unknown, P0 = unknown>(_layerWithImageNamed: P0): R;
    setState<R = void, P0 = number>(_setState: P0): R;
    reflectStateAnimated<R = void, P0 = boolean>(_reflectStateAnimated: P0): R;
    awakeFromNib<R = void>(): R;
    knobPressed<R = CALayer>(): R;
    setKnobPressed<R = void, P0 = CALayer>(_v: P0): R;
    knob<R = CALayer>(): R;
    setKnob<R = void, P0 = CALayer>(_v: P0): R;
    backgroundOff<R = CALayer>(): R;
    setBackgroundOff<R = void, P0 = CALayer>(_v: P0): R;
    backgroundOn<R = CALayer>(): R;
    setBackgroundOn<R = void, P0 = CALayer>(_v: P0): R;
  }
  namespace BCIOSStyleSwitchButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = BCIOSStyleSwitchButton>(): R;
      new: <R = BCIOSStyleSwitchButton>() => R;
    }
  }
}

declare const BCIOSStyleSwitchButton: cocoa.BCIOSStyleSwitchButton.CLASS;
