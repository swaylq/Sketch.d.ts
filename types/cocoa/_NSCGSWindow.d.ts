/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindow<T0 = void, T1 = void, T2 = void> extends NSCGSWindow {
    setChameleonOverrideColor<R = void, P0 = CGColor>(_setChameleonOverrideColor: P0): R;
    chameleonOverrideColor<R = CGColor>(): R;
    movementChildren<R = unknown>(): R;
    setMovementChildren<R = void, P0 = unknown>(_setMovementChildren: P0): R;
    setButtonShape<R = void, P0 = CGSRegionObject>(_setButtonShape: P0): R;
    buttonShape<R = CGSRegionObject>(): R;
    setActivationShape<R = void, P0 = CGSRegionObject>(_setActivationShape: P0): R;
    activationShape<R = CGSRegionObject>(): R;
    setCommandModifierExclusionShape<R = void, P0 = CGSRegionObject>(_setCommandModifierExclusionShape: P0): R;
    commandModifierExclusionShape<R = CGSRegionObject>(): R;
    setDragShape<R = void, P0 = CGSRegionObject>(_setDragShape: P0): R;
    dragShape<R = CGSRegionObject>(): R;
    setHasMainAppearance<R = void, P0 = boolean>(_setHasMainAppearance: P0): R;
    hasMainAppearance<R = boolean>(): R;
    setHasKeyAppearance<R = void, P0 = boolean>(_setHasKeyAppearance: P0): R;
    hasKeyAppearance<R = boolean>(): R;
    _setBackdropChameleonContribution<R = void, P0 = number>(__setBackdropChameleonContribution: P0): R;
    _backdropChameleonContribution<R = number>(): R;
    _setBackdropBleedFraction<R = void, P0 = number>(__setBackdropBleedFraction: P0): R;
    _backdropBleedFraction<R = number>(): R;
    _setBackdropsAreFrozen<R = void, P0 = boolean>(__setBackdropsAreFrozen: P0): R;
    _backdropsAreFrozen<R = boolean>(): R;
    setUseActiveShadow<R = void, P0 = boolean>(_setUseActiveShadow: P0): R;
    useActiveShadow<R = boolean>(): R;
    setShadowProperties<R = void, P0 = unknown>(_setShadowProperties: P0): R;
    shadowProperties<R = unknown>(): R;
    setCornerMask<R = void, P0 = unknown>(_setCornerMask: P0): R;
    cornerMask<R = unknown>(): R;
    setEventShape<R = void, P0 = CGSRegionObject>(_setEventShape: P0): R;
    eventShape<R = CGSRegionObject>(): R;
    setOpaqueShape<R = void, P0 = CGSRegionObject>(_setOpaqueShape: P0): R;
    opaqueShape<R = CGSRegionObject>(): R;
    setOpacity<R = void, P0 = number>(_setOpacity: P0): R;
    opacity<R = number>(): R;
    setSize<R = void, P0 = CGSize>(_setSize: P0): R;
    size<R = CGSize>(): R;
    moveGroupByX_Y_isChildOfGroupMovement<R = void, P0 = number, P1 = number, P2 = boolean>(_moveGroupByX: P0, _Y: P1, _isChildOfGroupMovement: P2): R;
    moveByX_Y_isChildOfGroupMovement<R = void, P0 = number, P1 = number, P2 = boolean>(_moveByX: P0, _Y: P1, _isChildOfGroupMovement: P2): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    frame<R = CGRect>(): R;
    setShape<R = void, P0 = CGSRegionObject>(_setShape: P0): R;
    shape<R = CGSRegionObject>(): R;
    windowID<R = number>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindowID<R = unknown, P0 = number>(_initWithWindowID: P0): R;
    initWithConnectionID<R = unknown, P0 = number>(_initWithConnectionID: P0): R;
  }
  namespace _NSCGSWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindow {
      alloc<R = _NSCGSWindow>(): R;
      new: <R = _NSCGSWindow>() => R;
    }
  }
}
