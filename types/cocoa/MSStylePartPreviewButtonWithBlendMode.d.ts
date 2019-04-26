/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartPreviewButtonWithBlendMode<T0 = void, T1 = void, T2 = void> extends MSStylePartPreviewButton {
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    changeBlendMode<R = void, P0 = unknown>(_changeBlendMode: P0): R;
    showBlendModeMenu<R = void, P0 = unknown>(_showBlendModeMenu: P0): R;
    updateButtonState<R = void>(): R;
    awakeFromNib<R = void>(): R;
    setupStylePartPreviewButtonWithBlendMode<R = void>(): R;
    blendModeMenu<R = NSMenu>(): R;
    setBlendModeMenu<R = void, P0 = NSMenu>(_v: P0): R;
    inlineBlendModeButton<R = NSButton>(): R;
    setInlineBlendModeButton<R = void, P0 = NSButton>(_v: P0): R;
    blendModes<R = NSSet>(): R;
    setBlendModes<R = void, P0 = NSSet>(_v: P0): R;
    delegate<R = MSStylePartPreviewButtonWithBlendModeDelegae>(): R;
    setDelegate<R = void, P0 = MSStylePartPreviewButtonWithBlendModeDelegae>(_v: P0): R;
  }
  namespace MSStylePartPreviewButtonWithBlendMode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartPreviewButton {
      alloc<R = MSStylePartPreviewButtonWithBlendMode>(): R;
      new: <R = MSStylePartPreviewButtonWithBlendMode>() => R;
      toolTipForBlendModes<R = unknown, P0 = unknown>(_toolTipForBlendModes: P0): R;
    }
  }
}

declare const MSStylePartPreviewButtonWithBlendMode: cocoa.MSStylePartPreviewButtonWithBlendMode.CLASS;
