/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearance<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    bestMatchFromAppearancesWithNames<R = unknown, P0 = unknown>(_bestMatchFromAppearancesWithNames: P0): R;
    _resolvesToFunctionRowAppearanceForWidget<R = boolean, P0 = unknown>(__resolvesToFunctionRowAppearanceForWidget: P0): R;
    _isFunctionRowAppearance<R = boolean>(): R;
    _allowsCustomControlTintColors<R = boolean>(): R;
    _allowsSystemControlTintColors<R = boolean>(): R;
    _isTintedWithLightColor<R = boolean>(): R;
    _minimumSizeForSmallToolbarButton<R = CGSize>(): R;
    _minimumSizeForToolbarButton<R = CGSize>(): R;
    _minimumSizeForStandardButton<R = CGSize>(): R;
    _prefersSliderAccessoryStepBehavior<R = boolean>(): R;
    _prefersButtonTitleNaturalBaseline<R = boolean>(): R;
    _prefersMoreHorizontalContentIndicators<R = boolean>(): R;
    _textGlyphColorTemperature<R = number>(): R;
    _textGlyphBrightnessMultiplier<R = number>(): R;
    imageNamed<R = unknown, P0 = unknown>(_imageNamed: P0): R;
    _allowsVibrancyForColor<R = boolean, P0 = unknown>(__allowsVibrancyForColor: P0): R;
    shouldBeArchived<R = boolean>(): R;
    setShouldBeArchived<R = void, P0 = boolean>(_setShouldBeArchived: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    _bundleResourceName<R = unknown>(): R;
    _bundle<R = unknown>(): R;
    _refreshedAppearance<R = unknown>(): R;
    _isBuiltinAppearance<R = boolean>(): R;
    uniqueIdentifier<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    compositingFilterForStyleName_styleConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_compositingFilterForStyleName: P0, _styleConfiguration: P1): R;
    blendModeForStyleName_styleConfiguration<R = number, P0 = unknown, P1 = unknown>(_blendModeForStyleName: P0, _styleConfiguration: P1): R;
    resolvedAppearanceForColor<R = unknown, P0 = unknown>(_resolvedAppearanceForColor: P0): R;
    resolvedAppearanceForStyleName_styleConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_resolvedAppearanceForStyleName: P0, _styleConfiguration: P1): R;
    resolvedAppearanceForWidget_styleConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_resolvedAppearanceForWidget: P0, _styleConfiguration: P1): R;
    resolvedAppearanceForWidget<R = unknown, P0 = unknown>(_resolvedAppearanceForWidget: P0): R;
    _intrinsicContentSizeForDrawingInRect_context_options<R = CGSize, P0 = CGRect, P1 = CGContext, P2 = unknown>(__intrinsicContentSizeForDrawingInRect: P0, _context: P1, _options: P2): R;
    _customColor_withSystemEffectOptions<R = unknown, P0 = unknown, P1 = unknown>(__customColor: P0, _withSystemEffectOptions: P1): R;
    _setCustomStrokeColor<R = boolean, P0 = unknown>(__setCustomStrokeColor: P0): R;
    _setCustomFillColor<R = boolean, P0 = unknown>(__setCustomFillColor: P0): R;
    _setCustomColor<R = boolean, P0 = unknown>(__setCustomColor: P0): R;
    _customColor<R = unknown, P0 = unknown>(__customColor: P0): R;
    _copyCustomCGColor<R = CGColor, P0 = unknown>(__copyCustomCGColor: P0): R;
    _customColor_withTint<R = unknown, P0 = unknown, P1 = unknown>(__customColor: P0, _withTint: P1): R;
    _copyCustomCGColor_withTint<R = CGColor, P0 = unknown, P1 = unknown>(__copyCustomCGColor: P0, _withTint: P1): R;
    _createLayerContents_contentsCenter<R = CGImage, P0 = unknown, P1 = CGRect>(__createLayerContents: P0, _contentsCenter: P1): R;
    _defaultCompositingFilter<R = unknown>(): R;
    _defaultBlendMode<R = number>(): R;
    _compositingFilterForWidget<R = unknown, P0 = unknown>(__compositingFilterForWidget: P0): R;
    _blendModeForWidget<R = number, P0 = unknown>(__blendModeForWidget: P0): R;
    _copyMeasurements_context_options_requestedMeasurements<R = unknown, P0 = CGRect, P1 = CGContext, P2 = unknown, P3 = unknown>(__copyMeasurements: P0, _context: P1, _options: P2, _requestedMeasurements: P3): R;
    _createOrUpdateLayer_options<R = void, P0 = unknown, P1 = unknown>(__createOrUpdateLayer: P0, _options: P1): R;
    _drawInRect_context_options<R = void, P0 = CGRect, P1 = CGContext, P2 = unknown>(__drawInRect: P0, _context: P1, _options: P2): R;
    _callCoreUIWithBlock_options<R = number, P0 = CDUnknownBlockType, P1 = unknown>(__callCoreUIWithBlock: P0, _options: P1): R;
    _flattenedAppearanceNamesList<R = unknown>(): R;
    _defaultBezelBrightness<R = number>(): R;
    _optionsMustContainTintColor<R = boolean>(): R;
    _backstoppedByFullAppearance<R = boolean>(): R;
    _appearanceForNonVibrantContent<R = unknown>(): R;
    _appearanceForVibrantContent<R = unknown>(): R;
    _coreUICatalog<R = unknown>(): R;
    _coreUIRenderer<R = OpaqueCUIRendererRef>(): R;
    _changeALSAttributes<R = void, P0 = unknown>(__changeALSAttributes: P0): R;
    _appearanceAuxiliary<R = unknown>(): R;
    _setupAuxiliary<R = void>(): R;
    _initForArchivingOnlyWithAppearanceNamed_bundle<R = unknown, P0 = unknown, P1 = unknown>(__initForArchivingOnlyWithAppearanceNamed: P0, _bundle: P1): R;
    _initWithContentsOfURL<R = unknown, P0 = unknown>(__initWithContentsOfURL: P0): R;
    initWithAppearanceNamed_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithAppearanceNamed: P0, _bundle: P1): R;
    tintColor<R = unknown>(): R;
    _setTintColor<R = void, P0 = unknown>(__setTintColor: P0): R;
    appearanceByApplyingTintColor<R = unknown, P0 = unknown>(_appearanceByApplyingTintColor: P0): R;
    systemFontForControlSize_weight<R = unknown, P0 = number, P1 = number>(_systemFontForControlSize: P0, _weight: P1): R;
    dealloc<R = void>(): R;
    _commonInitWithCoreUIRenderer_name<R = void, P0 = OpaqueCUIRendererRef, P1 = unknown>(__commonInitWithCoreUIRenderer: P0, _name: P1): R;
    name<R = NSString>(): R;
    allowsVibrancy<R = boolean>(): R;
    // + NSAppearance(Chocolat):
    isDark_bc<R = boolean>(): R;
  }
  namespace NSAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSAppearance>(): R;
      new: <R = NSAppearance>() => R;
      _isLightTintColor<R = boolean, P0 = unknown>(__isLightTintColor: P0): R;
      _performWithCurrentAppearance_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__performWithCurrentAppearance: P0, _usingBlock: P1): R;
      _coreUIOptionsSharedKeySet<R = unknown>(): R;
      colorByAdjustingLightnessOfColor_darker<R = unknown, P0 = unknown, P1 = boolean>(_colorByAdjustingLightnessOfColor: P0, _darker: P1): R;
      _systemAppearanceProxy<R = unknown>(): R;
      _menuBarAppearanceProxy<R = unknown>(): R;
      setFunctionRowALSAttributes<R = void, P0 = unknown>(_setFunctionRowALSAttributes: P0): R;
      _darkAquaAppearance<R = unknown>(): R;
      _darkAquaAppearanceWithAccessibility<R = unknown, P0 = boolean>(__darkAquaAppearanceWithAccessibility: P0): R;
      _controlStripCustomizationPaletteAppearance<R = unknown>(): R;
      _touchBarCustomizationPaletteAppearance<R = unknown>(): R;
      _controlStripAppearance<R = unknown>(): R;
      _functionRowAppearance<R = unknown>(): R;
      _mediumLightAppearance<R = unknown>(): R;
      _vibrantLightAppearance<R = unknown>(): R;
      _vibrantDarkAppearance<R = unknown>(): R;
      _aquaAppearance<R = unknown>(): R;
      _aquaAppearanceWithAccessibility<R = unknown, P0 = boolean>(__aquaAppearanceWithAccessibility: P0): R;
      _syrahAppearance<R = unknown>(): R;
      _contentBackgroundAppearance<R = unknown>(): R;
      appearanceNamed<R = unknown, P0 = unknown>(_appearanceNamed: P0): R;
      _applicationAppearance<R = unknown>(): R;
      setCurrentAppearance<R = void, P0 = unknown>(_setCurrentAppearance: P0): R;
      currentAppearance<R = unknown>(): R;
      _initializeCoreUI<R = void>(): R;
      _setSystemAppearanceTestingOverride<R = void, P0 = number>(__setSystemAppearanceTestingOverride: P0): R;
      // + NSAppearance(Chocolat): 
      sketchDefaultDarkAppearance<R = unknown>(): R;
    }
  }
}

declare const NSAppearance: cocoa.NSAppearance.CLASS;
