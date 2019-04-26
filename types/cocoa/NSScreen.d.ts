/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreen<T0 = void, T1 = void, T2 = void> extends NSObject {
    _isActiveScreen<R = boolean>(): R;
    _currentSpace<R = number>(): R;
    imageInRect_underWindow<R = unknown, P0 = CGRect, P1 = unknown>(_imageInRect: P0, _underWindow: P1): R;
    imageInRect<R = unknown, P0 = CGRect>(_imageInRect: P0): R;
    backingAlignedRect_options<R = CGRect, P0 = CGRect, P1 = number>(_backingAlignedRect: P0, _options: P1): R;
    convertRectFromBacking<R = CGRect, P0 = CGRect>(_convertRectFromBacking: P0): R;
    convertRectToBacking<R = CGRect, P0 = CGRect>(_convertRectToBacking: P0): R;
    userSpaceScaleFactor<R = number>(): R;
    canRepresentDisplayGamut<R = boolean, P0 = number>(_canRepresentDisplayGamut: P0): R;
    _safeVisibleFrame<R = CGRect>(): R;
    _layoutFrame<R = CGRect>(): R;
    _menuBarHeight<R = number>(): R;
    _dockRect<R = CGRect>(): R;
    _dockHidden<R = boolean>(): R;
    _dockOrientation<R = number>(): R;
    _UUIDString<R = unknown>(): R;
    devicePixelCounts<R = CGSize>(): R;
    _resolution<R = CGSize>(): R;
    maximumExtendedDynamicRangeColorComponentValue<R = number>(): R;
    _isZeroScreen<R = boolean>(): R;
    _displayID<R = number>(): R;
    _screenNumber<R = number>(): R;
    hash<R = number>(): R;
    _snapshot<R = unknown>(): R;
    _updateWithDisplay_sharedInfo<R = void, P0 = unknown, P1 = unknown>(__updateWithDisplay: P0, _sharedInfo: P1): R;
    dealloc<R = void>(): R;
    _initWithDisplay_sharedInfo<R = unknown, P0 = unknown, P1 = unknown>(__initWithDisplay: P0, _sharedInfo: P1): R;
    _switchToSetting_error<R = boolean, P0 = unknown, P1 = unknown>(__switchToSetting: P0, _error: P1): R;
    _bestSettingSimilarToSetting_exactMatch<R = unknown, P0 = unknown, P1 = string>(__bestSettingSimilarToSetting: P0, _exactMatch: P1): R;
    _bestSettingWithBitsPerPixel_width_height_refreshRate_exactMatch<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = string>(__bestSettingWithBitsPerPixel: P0, _width: P1, _height: P2, _refreshRate: P3, _exactMatch: P4): R;
    _bestSettingWithBitsPerPixel_width_height_exactMatch<R = unknown, P0 = number, P1 = number, P2 = number, P3 = string>(__bestSettingWithBitsPerPixel: P0, _width: P1, _height: P2, _exactMatch: P3): R;
    _availableSettings<R = unknown>(): R;
    _currentSetting<R = unknown>(): R;
    _releaseCapture<R = boolean, P0 = unknown>(__releaseCapture: P0): R;
    _isCaptured<R = boolean>(): R;
    _capture<R = boolean, P0 = unknown>(__capture: P0): R;
    displayLinkWithHandler<R = unknown, P0 = CDUnknownBlockType>(_displayLinkWithHandler: P0): R;
    displayLinkWithTarget_selector<R = unknown, P0 = unknown, P1 = string>(_displayLinkWithTarget: P0, _selector: P1): R;
    addUpdateHandler<R = void, P0 = CDUnknownBlockType>(_addUpdateHandler: P0): R;
    supportedWindowDepths<R = number>(): R;
    deviceDescription<R = NSDictionary>(): R;
    visibleFrame<R = CGRect>(): R;
    backingScaleFactor<R = number>(): R;
    frame<R = CGRect>(): R;
    colorSpace<R = NSColorSpace>(): R;
    depth<R = number>(): R;
    // + NSScreen(MSRetina): 
    isOnRetinaScreen<R = boolean>(): R;
  }
  namespace NSScreen {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScreen>(): R;
      new: <R = NSScreen>() => R;
      _cgScreenPointForPoint<R = CGPoint, P0 = CGPoint>(__cgScreenPointForPoint: P0): R;
      _screenAtPoint<R = unknown, P0 = CGPoint>(__screenAtPoint: P0): R;
      _screenForUUIDString<R = unknown, P0 = unknown>(__screenForUUIDString: P0): R;
      screensHaveSeparateSpaces<R = boolean>(): R;
      _spacePerDisplay<R = boolean>(): R;
      _backingScaleFactorForScreen<R = number, P0 = unknown>(__backingScaleFactorForScreen: P0): R;
      _screenForScreenNumber<R = unknown, P0 = number>(__screenForScreenNumber: P0): R;
      deepestScreen<R = unknown>(): R;
      _zeroScreenIsNew<R = boolean>(): R;
      _zeroScreenHeight<R = number>(): R;
      _zeroScreen<R = unknown>(): R;
      mainScreen<R = unknown>(): R;
      screens<R = unknown>(): R;
      _shieldingWindowLevel<R = number>(): R;
      _releaseAllCapturedScreens<R = boolean, P0 = unknown>(__releaseAllCapturedScreens: P0): R;
      _captureAllScreens<R = boolean, P0 = unknown>(__captureAllScreens: P0): R;
      // + NSScreen(MSRetina): 
      highestBackingScale_bc<R = number>(): R;
    }
  }
}

declare const NSScreen: cocoa.NSScreen.CLASS;
