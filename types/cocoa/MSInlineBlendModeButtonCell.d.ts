/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineBlendModeButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {}
  namespace MSInlineBlendModeButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {
      alloc<R = MSInlineBlendModeButtonCell>(): R;
      new: <R = MSInlineBlendModeButtonCell>() => R;
    }
  }
}

declare const MSInlineBlendModeButtonCell: cocoa.MSInlineBlendModeButtonCell.CLASS;
