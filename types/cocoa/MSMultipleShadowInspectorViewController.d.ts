/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleShadowInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSMultipleColorStylePartInspectorViewController {
    views<R = unknown>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    buttonsTrailingConstraint<R = NSLayoutConstraint>(): R;
    setButtonsTrailingConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    spreadField<R = MSTextLabelForUpDownField>(): R;
    setSpreadField<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    blurRadiusField<R = MSTextLabelForUpDownField>(): R;
    setBlurRadiusField<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    yOffsetField<R = MSTextLabelForUpDownField>(): R;
    setYOffsetField<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    xOffsetField<R = MSTextLabelForUpDownField>(): R;
    setXOffsetField<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    addStylePartButton<R = NSButton>(): R;
    setAddStylePartButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSMultipleShadowInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMultipleColorStylePartInspectorViewController {
      alloc<R = MSMultipleShadowInspectorViewController>(): R;
      new: <R = MSMultipleShadowInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleShadowInspectorViewController: cocoa.MSMultipleShadowInspectorViewController.CLASS;
