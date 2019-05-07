/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureTextView<T0 = void, T1 = void, T2 = void> extends NSTextView, NSLayoutManagerDelegateProtocol {
    _shouldUseBoundsOutsets<R = boolean>(): R;
    view_stringForToolTip_point_userData<R = unknown, P0 = unknown, P1 = number, P2 = CGPoint, P3 = void>(_view: P0, _stringForToolTip: P1, _point: P2, _userData: P3): R;
    getCapsLockRect_numLockRect<R = void, P0 = CGRect, P1 = CGRect>(_getCapsLockRect: P0, _numLockRect: P1): R;
    _updateIndicators<R = void>(): R;
    writablePasteboardTypes<R = unknown>(): R;
    setImportsGraphics<R = void, P0 = boolean>(_setImportsGraphics: P0): R;
    setRichText<R = void, P0 = boolean>(_setRichText: P0): R;
    setSelectable<R = void, P0 = boolean>(_setSelectable: P0): R;
    enableSecureInput<R = void, P0 = boolean>(_enableSecureInput: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    _resetTooltips<R = void>(): R;
    _detachFieldEditorFromWindow<R = void, P0 = unknown>(__detachFieldEditorFromWindow: P0): R;
    _accessibilityIndicatorImageUnderPoint_forParent<R = unknown, P0 = CGPoint, P1 = unknown>(__accessibilityIndicatorImageUnderPoint: P0, _forParent: P1): R;
    _accessibilityIndicatorImageChildrenWithParent<R = unknown, P0 = unknown>(__accessibilityIndicatorImageChildrenWithParent: P0): R;
    _accessibilityPostValueChangeNotificationAfterDelay<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSecureTextView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView, NSLayoutManagerDelegateProtocol {
      alloc<R = NSSecureTextView>(): R;
      new: <R = NSSecureTextView>() => R;
      secureTextViewForWindow<R = unknown, P0 = unknown>(_secureTextViewForWindow: P0): R;
      _doMenu<R = void, P0 = unknown>(__doMenu: P0): R;
    }
  }
}

declare const NSSecureTextView: cocoa.NSSecureTextView.CLASS;
