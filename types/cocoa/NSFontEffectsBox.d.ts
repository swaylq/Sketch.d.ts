/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontEffectsBox<T0 = void, T1 = void, T2 = void> extends NSBox, NSToolbarDelegateProtocol {
    _validateShadowEffect<R = void, P0 = boolean>(__validateShadowEffect: P0): R;
    _validateDocumentColor<R = void, P0 = boolean>(__validateDocumentColor: P0): R;
    _validateTextColor<R = void, P0 = boolean>(__validateTextColor: P0): R;
    _validateStrikethrough<R = void, P0 = boolean>(__validateStrikethrough: P0): R;
    _validateUnderline<R = void, P0 = boolean>(__validateUnderline: P0): R;
    _sendChangeAttributesActionIfSupported<R = boolean>(): R;
    _sendCarbonNotificationFor_tags_withValuePtrs_andSizes<R = void, P0 = number, P1 = number, P2 = void, P3 = number>(__sendCarbonNotificationFor: P0, _tags: P1, _withValuePtrs: P2, _andSizes: P3): R;
    _sendCarbonNotificationForTag_withValuePtr_andSize<R = void, P0 = number, P1 = void, P2 = number>(__sendCarbonNotificationForTag: P0, _withValuePtr: P1, _andSize: P2): R;
    carbonNotificationProc<R = void>(): R;
    _toggleShadow<R = void, P0 = unknown>(__toggleShadow: P0): R;
    _openEffectsButton<R = void, P0 = unknown>(__openEffectsButton: P0): R;
    _lineStyleForLineStyleButton<R = number, P0 = unknown>(__lineStyleForLineStyleButton: P0): R;
    _strikethroughStyle<R = number>(): R;
    _underlineStyle<R = number>(): R;
    _validateFontPanelFontAttributes<R = void, P0 = unknown>(__validateFontPanelFontAttributes: P0): R;
    _documentBackgroundColor<R = unknown>(): R;
    _foregroundColor<R = unknown>(): R;
    _setAttributes_isMultiple<R = void, P0 = unknown, P1 = boolean>(__setAttributes: P0, _isMultiple: P1): R;
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    _currentShadowForFont<R = unknown, P0 = unknown>(__currentShadowForFont: P0): R;
    shadowsEnabled<R = boolean>(): R;
    _orderFrontModalColorPanel<R = void>(): R;
    _changeColorToColor<R = void, P0 = unknown>(__changeColorToColor: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    _changeShadowBlur<R = void, P0 = unknown>(__changeShadowBlur: P0): R;
    _changeShadowAngle<R = void, P0 = unknown>(__changeShadowAngle: P0): R;
    _changeShadowOpacity<R = void, P0 = unknown>(__changeShadowOpacity: P0): R;
    _changeDocumentColor<R = void, P0 = unknown>(__changeDocumentColor: P0): R;
    _changeTextColor<R = void, P0 = unknown>(__changeTextColor: P0): R;
    awakeFromNib<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFontEffectsBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBox, NSToolbarDelegateProtocol {
      alloc<R = NSFontEffectsBox>(): R;
      new: <R = NSFontEffectsBox>() => R;
    }
  }
}

declare const NSFontEffectsBox: cocoa.NSFontEffectsBox.CLASS;
