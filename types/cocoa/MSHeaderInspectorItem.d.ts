/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeaderInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    setLabelLeadingMargin<R = void, P0 = number>(_setLabelLeadingMargin: P0): R;
    updateStackView<R = void>(): R;
    setButtonTarget_action_image_alternate<R = void, P0 = unknown, P1 = string, P2 = unknown, P3 = unknown>(_setButtonTarget: P0, _action: P1, _image: P2, _alternate: P3): R;
    accessoryStackView<R = NSStackView>(): R;
    setAccessoryStackView<R = void, P0 = NSStackView>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    headerButton<R = NSButton>(): R;
    setHeaderButton<R = void, P0 = NSButton>(_v: P0): R;
    adjustedLabelLeadingMargin<R = NSNumber>(): R;
    setAdjustedLabelLeadingMargin<R = void, P0 = NSNumber>(_v: P0): R;
    labelLeadingConstraint<R = NSLayoutConstraint>(): R;
    setLabelLeadingConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    label<R = NSTextField>(): R;
    setLabel<R = void, P0 = NSTextField>(_v: P0): R;
    titleView<R = NSView>(): R;
    setTitleView<R = void, P0 = NSView>(_v: P0): R;
    accessoryViews<R = NSArray>(): R;
    setAccessoryViews<R = void, P0 = NSArray>(_v: P0): R;
    wantsSeparatorInset<R = boolean>(): R;
    setWantsSeparatorInset<R = void, P0 = boolean>(_v: P0): R;
    wantsSeparator<R = boolean>(): R;
    setWantsSeparator<R = void, P0 = boolean>(_v: P0): R;
    buttonDisabled<R = boolean>(): R;
    setButtonDisabled<R = void, P0 = boolean>(_v: P0): R;
    buttonState<R = number>(): R;
    setButtonState<R = void, P0 = number>(_v: P0): R;
    buttonToolTip<R = NSString>(): R;
    setButtonToolTip<R = void, P0 = NSString>(_v: P0): R;
    labelText<R = NSString>(): R;
    setLabelText<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSHeaderInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSHeaderInspectorItem>(): R;
      new: <R = MSHeaderInspectorItem>() => R;
    }
  }
}

declare const MSHeaderInspectorItem: cocoa.MSHeaderInspectorItem.CLASS;
