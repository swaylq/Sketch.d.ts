/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonGroupTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSCustomTouchBarItem {
    resetLayout<R = void>(): R;
    removeView<R = void, P0 = unknown>(_removeView: P0): R;
    insertPopoverItem_atIndex<R = void, P0 = unknown, P1 = number>(_insertPopoverItem: P0, _atIndex: P1): R;
    insertView_atIndex<R = void, P0 = unknown, P1 = number>(_insertView: P0, _atIndex: P1): R;
    addPopoverItem<R = void, P0 = unknown>(_addPopoverItem: P0): R;
    addView<R = void, P0 = unknown>(_addView: P0): R;
    buttonSpacing<R = number>(): R;
    setButtonSpacing<R = void, P0 = number>(_v: P0): R;
    viewCount<R = number>(): R;
    preferredButtonWidth<R = number>(): R;
    setPreferredButtonWidth<R = void, P0 = number>(_v: P0): R;
    defaultButtonImagePosition<R = number>(): R;
    setDefaultButtonImagePosition<R = void, P0 = number>(_v: P0): R;
    compressionOption<R = number>(): R;
    setCompressionOption<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSButtonGroupTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCustomTouchBarItem {
      alloc<R = NSButtonGroupTouchBarItem>(): R;
      new: <R = NSButtonGroupTouchBarItem>() => R;
      makePopoverItemWithIdentifier_popoverTouchBar_title_image_preferredWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_makePopoverItemWithIdentifier: P0, _popoverTouchBar: P1, _title: P2, _image: P3, _preferredWidth: P4): R;
      makePopoverItemWithIdentifier_popoverTouchBar_title_image<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_makePopoverItemWithIdentifier: P0, _popoverTouchBar: P1, _title: P2, _image: P3): R;
      makeAlertButtonWithTitle_image_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_makeAlertButtonWithTitle: P0, _image: P1, _target: P2, _action: P3): R;
      makeButtonWithTitle_image_target_action_preferredWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = number>(_makeButtonWithTitle: P0, _image: P1, _target: P2, _action: P3, _preferredWidth: P4): R;
      makeButtonWithTitle_image_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_makeButtonWithTitle: P0, _image: P1, _target: P2, _action: P3): R;
    }
  }
}

declare const NSButtonGroupTouchBarItem: cocoa.NSButtonGroupTouchBarItem.CLASS;
