/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualEffectView<T0 = void, T1 = void, T2 = void> extends NSView {
    _stringValueForIntrospectorPropertyKey<R = unknown, P0 = unknown>(__stringValueForIntrospectorPropertyKey: P0): R;
    _propertyKeysForIntrospector<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    _generateMaskImageWithCurrentFillColor<R = unknown>(): R;
    _freeCachedMaskImages<R = void>(): R;
    fontSmoothingBackgroundColor<R = unknown>(): R;
    _needsDarkening<R = boolean>(): R;
    _needsProxyLayer<R = boolean>(): R;
    _needsWindowBackdrop<R = boolean>(): R;
    _currentMaterialHasCGSMaterial<R = boolean>(): R;
    _currentFillColor<R = unknown>(): R;
    _useAccessibilityColors<R = boolean>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    wantsUpdateLayer<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    _removeColorCopyLayerIfNeeded<R = void>(): R;
    _updateColorCopyLayer<R = void>(): R;
    debugDescription<R = unknown>(): R;
    _removeDarkenLayerIfNeeded<R = void>(): R;
    _updateDarkenLayer<R = void>(): R;
    _updateCABackdropLayerGroupName<R = void>(): R;
    _removeMaterialLayerIfNeeded<R = void>(): R;
    _updateMaterialLayer<R = void>(): R;
    _coreUIOptions<R = unknown>(): R;
    _removeProxyLayerIfNeeded<R = void>(): R;
    _updateProxyLayer<R = void>(): R;
    _removeWindowBackdropIfNeeded<R = void>(): R;
    _updateWindowBackdrop<R = void>(): R;
    _accessibilityRTChanged<R = void, P0 = unknown>(__accessibilityRTChanged: P0): R;
    _markDirtyIfHasAccelerationChanged<R = void>(): R;
    rectToClearBackingStore<R = CGRect>(): R;
    _shouldUseActiveAppearance<R = boolean>(): R;
    _reactToMaterialChangeDiscardingMaterialLayers_invalidatingForFSBC_invalidatingPreferredAppearance<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__reactToMaterialChangeDiscardingMaterialLayers: P0, _invalidatingForFSBC: P1, _invalidatingPreferredAppearance: P2): R;
    _currentMaterialName<R = unknown>(): R;
    _markDirty<R = void>(): R;
    emphasized<R = boolean>(): R;
    _preferredAppearance<R = unknown>(): R;
    maskImage<R = NSImage>(): R;
    setMaskImage<R = void, P0 = NSImage>(_v: P0): R;
    vibrancyEffect<R = number>(): R;
    setVibrancyEffect<R = void, P0 = number>(_v: P0): R;
    blendingMode<R = number>(): R;
    setBlendingMode<R = void, P0 = number>(_v: P0): R;
    interiorBackgroundStyle<R = number>(): R;
    _effectiveGroupName<R = NSString>(): R;
    _groupName<R = NSString>(): R;
    set_groupName<R = void, P0 = NSString>(_v: P0): R;
    _needsClearProxyLayer<R = boolean>(): R;
    set_needsClearProxyLayer<R = void, P0 = boolean>(_v: P0): R;
    _clear<R = boolean>(): R;
    set_clear<R = void, P0 = boolean>(_v: P0): R;
    _internalMaterialType<R = number>(): R;
    set_internalMaterialType<R = void, P0 = number>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    appearsDarker<R = boolean>(): R;
    setAppearsDarker<R = void, P0 = boolean>(_v: P0): R;
    inheritsBlendGroup<R = boolean>(): R;
    setInheritsBlendGroup<R = void, P0 = boolean>(_v: P0): R;
    emphasized<R = boolean>(): R;
    setEmphasized<R = void, P0 = boolean>(_v: P0): R;
    material<R = number>(): R;
    setMaterial<R = void, P0 = number>(_v: P0): R;
    _usesMaterialPreferredAppearance<R = boolean>(): R;
    set_usesMaterialPreferredAppearance<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSVisualEffectView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSVisualEffectView>(): R;
      new: <R = NSVisualEffectView>() => R;
      endFreezingInWindow<R = void, P0 = unknown>(_endFreezingInWindow: P0): R;
      beginFreezingInWindow<R = void, P0 = unknown>(_beginFreezingInWindow: P0): R;
      _representativeColorForMaterial_isActive<R = unknown, P0 = number, P1 = boolean>(__representativeColorForMaterial: P0, _isActive: P1): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      keyPathsForValuesAffecting_effectiveGroupName<R = unknown>(): R;
    }
  }
}

declare const NSVisualEffectView: cocoa.NSVisualEffectView.CLASS;
