/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPanGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
    _setTranslatesContextOrigin<R = void, P0 = boolean>(__setTranslatesContextOrigin: P0): R;
    _translatesContextOrigin<R = boolean>(): R;
    _noteStateChanged<R = void>(): R;
    _panAuxiliary<R = unknown>(): R;
    _updatePropertiesWithLocation_event<R = void, P0 = CGPoint, P1 = unknown>(__updatePropertiesWithLocation: P0, _event: P1): R;
    _updateForMouseDownWithEvent<R = void, P0 = unknown>(__updateForMouseDownWithEvent: P0): R;
    timestamp<R = number>(): R;
    touches<R = unknown>(): R;
    velocityInView<R = CGPoint, P0 = unknown>(_velocityInView: P0): R;
    setTranslation_inView<R = void, P0 = CGPoint, P1 = unknown>(_setTranslation: P0, _inView: P1): R;
    translationInView<R = CGPoint, P0 = unknown>(_translationInView: P0): R;
    setNumberOfTouchesRequired<R = void, P0 = number>(_setNumberOfTouchesRequired: P0): R;
    numberOfTouchesRequired<R = number>(): R;
    _commonInit<R = void>(): R;
    _auxLocationInWindow<R = CGPoint>(): R;
    _auxModifierFlags<R = number>(): R;
    _auxTimestamp<R = number>(): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSPanGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSPanGestureRecognizer>(): R;
      new: <R = NSPanGestureRecognizer>() => R;
    }
  }
}

declare const NSPanGestureRecognizer: cocoa.NSPanGestureRecognizer.CLASS;
