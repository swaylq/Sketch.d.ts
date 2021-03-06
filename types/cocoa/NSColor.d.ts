/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColor<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {
    _getSemanticallyEquivalentVisualEffectMaterial<R = boolean, P0 = number>(__getSemanticallyEquivalentVisualEffectMaterial: P0): R;
    colorWithSystemEffect<R = unknown, P0 = number>(_colorWithSystemEffect: P0): R;
    shadowWithLevel<R = unknown, P0 = number>(_shadowWithLevel: P0): R;
    highlightWithLevel<R = unknown, P0 = number>(_highlightWithLevel: P0): R;
    setStroke<R = void>(): R;
    setFill<R = void>(): R;
    colorUsingColorSpaceName<R = unknown, P0 = unknown>(_colorUsingColorSpaceName: P0): R;
    colorUsingColorSpaceName_device<R = unknown, P0 = unknown, P1 = unknown>(_colorUsingColorSpaceName: P0, _device: P1): R;
    _colorWithDynamicAlphaComponent<R = unknown, P0 = number>(__colorWithDynamicAlphaComponent: P0): R;
    colorSpaceName<R = unknown>(): R;
    getComponents<R = void, P0 = number>(_getComponents: P0): R;
    getCyan_magenta_yellow_black_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_getCyan: P0, _magenta: P1, _yellow: P2, _black: P3, _alpha: P4): R;
    getWhite_alpha<R = void, P0 = number, P1 = number>(_getWhite: P0, _alpha: P1): R;
    getHue_saturation_brightness_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
    getRed_green_blue_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    set<R = void>(): R;
    _setAsSystemColor<R = void>(): R;
    drawSwatchInRect<R = void, P0 = CGRect>(_drawSwatchInRect: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    colorUsingType<R = unknown, P0 = number>(_colorUsingType: P0): R;
    colorUsingColorSpace<R = unknown, P0 = unknown>(_colorUsingColorSpace: P0): R;
    copy<R = unknown>(): R;
    writeToPasteboard<R = void, P0 = unknown>(_writeToPasteboard: P0): R;
    isUniform<R = boolean>(): R;
    _subtractColor<R = unknown, P0 = unknown>(__subtractColor: P0): R;
    _addColor<R = unknown, P0 = unknown>(__addColor: P0): R;
    blendedColorWithFraction_ofColor<R = unknown, P0 = number, P1 = unknown>(_blendedColorWithFraction: P0, _ofColor: P1): R;
    colorWithAlphaComponent<R = unknown, P0 = number>(_colorWithAlphaComponent: P0): R;
    _colorWithModifier<R = unknown, P0 = unknown>(__colorWithModifier: P0): R;
    CA_distanceToValue<R = number, P0 = unknown>(_CA_distanceToValue: P0): R;
    CA_interpolateValue_byFraction<R = unknown, P0 = unknown, P1 = number>(_CA_interpolateValue: P0, _byFraction: P1): R;
    CA_addValue_multipliedBy<R = unknown, P0 = unknown, P1 = number>(_CA_addValue: P0, _multipliedBy: P1): R;
    _colorForSelectedTextBackground<R = unknown>(): R;
    _accessibilityValue<R = unknown>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    scriptingColorDescriptor<R = unknown>(): R;
    _colorWithValue_forComponent_backupHue_backupSaturation<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(__colorWithValue: P0, _forComponent: P1, _backupHue: P2, _backupSaturation: P3): R;
    _hsbColor<R = unknown>(): R;
    _isSourceListColor<R = boolean>(): R;
    _luminance<R = number>(): R;
    numberOfComponents<R = number>(): R;
    colorSpace<R = NSColorSpace>(): R;
    patternImage<R = NSImage>(): R;
    blackComponent<R = number>(): R;
    yellowComponent<R = number>(): R;
    magentaComponent<R = number>(): R;
    cyanComponent<R = number>(): R;
    whiteComponent<R = number>(): R;
    brightnessComponent<R = number>(): R;
    saturationComponent<R = number>(): R;
    hueComponent<R = number>(): R;
    blueComponent<R = number>(): R;
    greenComponent<R = number>(): R;
    redComponent<R = number>(): R;
    localizedColorNameComponent<R = NSString>(): R;
    localizedCatalogNameComponent<R = NSString>(): R;
    colorNameComponent<R = NSString>(): R;
    catalogNameComponent<R = NSString>(): R;
    type<R = number>(): R;
    hash<R = number>(): R;
    CGColor<R = CGColor>(): R;
    alphaComponent<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    superclass<R = unknown>(): R;
    // + NSColor(CHColorExtensions): 
    isWhite<R = boolean>(): R;
    fuzzyIsEqual<R = boolean, P0 = unknown>(_fuzzyIsEqual: P0): R;
    newCGColor<R = CGColor>(): R;
    // + NSColor(ColorTranslationWithoutConversion): 
    colorTranslatedToColorSpace<R = unknown, P0 = unknown>(_colorTranslatedToColorSpace: P0): R;
    // + NSColor(MSTheme): 
    setThemeCachingKey<R = void, P0 = unknown>(_setThemeCachingKey: P0): R;
    themeCachingKey<R = unknown>(): R;
    highlightedColor<R = unknown>(): R;
    colorByApplyingModifier<R = unknown, P0 = unknown>(_colorByApplyingModifier: P0): R;
    colorByApplyingModifiers<R = unknown, P0 = unknown>(_colorByApplyingModifiers: P0): R;
    // + NSColor(NSColor_String): 
    stringValueWithAlpha<R = unknown, P0 = boolean>(_stringValueWithAlpha: P0): R;
    hexValue<R = unknown>(): R;
    // + NSColor(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSColor(Manifest):
    manifestComponents<R = NSArray>(): R;
  }
  namespace NSColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {
      alloc<R = NSColor>(): R;
      new: <R = NSColor>() => R;
      currentControlTint<R = number>(): R;
      colorForControlTint<R = unknown, P0 = number>(_colorForControlTint: P0): R;
      ignoresAlpha<R = boolean>(): R;
      setIgnoresAlpha<R = void, P0 = boolean>(_setIgnoresAlpha: P0): R;
      oldSystemColorWithCoder<R = unknown, P0 = unknown>(_oldSystemColorWithCoder: P0): R;
      colorFromPasteboard<R = unknown, P0 = unknown>(_colorFromPasteboard: P0): R;
      _colorFromData<R = unknown, P0 = unknown>(__colorFromData: P0): R;
      colorWithColorSpace_hue_saturation_brightness_alpha<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = number>(_colorWithColorSpace: P0, _hue: P1, _saturation: P2, _brightness: P3, _alpha: P4): R;
      colorWithHue_saturation_brightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
      colorWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithWhite_alpha<R = unknown, P0 = number, P1 = number>(_colorWithWhite: P0, _alpha: P1): R;
      colorWithCGColor<R = unknown, P0 = CGColor>(_colorWithCGColor: P0): R;
      colorWithDisplayP3Red_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithDisplayP3Red: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithSRGBRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithSRGBRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithGenericGamma22White_alpha<R = unknown, P0 = number, P1 = number>(_colorWithGenericGamma22White: P0, _alpha: P1): R;
      colorWithColorSpace_components_count<R = unknown, P0 = unknown, P1 = number, P2 = number>(_colorWithColorSpace: P0, _components: P1, _count: P2): R;
      colorWithPatternImage<R = unknown, P0 = unknown>(_colorWithPatternImage: P0): R;
      colorNamed_bundle<R = unknown, P0 = unknown, P1 = unknown>(_colorNamed: P0, _bundle: P1): R;
      colorNamed<R = unknown, P0 = unknown>(_colorNamed: P0): R;
      colorWithCatalogName_colorName<R = unknown, P0 = unknown, P1 = unknown>(_colorWithCatalogName: P0, _colorName: P1): R;
      colorWithDeviceCyan_magenta_yellow_black_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_colorWithDeviceCyan: P0, _magenta: P1, _yellow: P2, _black: P3, _alpha: P4): R;
      colorWithDeviceRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithDeviceRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithDeviceHue_saturation_brightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithDeviceHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
      colorWithDeviceWhite_alpha<R = unknown, P0 = number, P1 = number>(_colorWithDeviceWhite: P0, _alpha: P1): R;
      colorWithCalibratedRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithCalibratedRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithCalibratedHue_saturation_brightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithCalibratedHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
      colorWithCalibratedWhite_alpha<R = unknown, P0 = number, P1 = number>(_colorWithCalibratedWhite: P0, _alpha: P1): R;
      selectedInactiveColor<R = unknown>(): R;
      highlightedMenuTextColor<R = unknown>(): R;
      highlightedMenuColor<R = unknown>(): R;
      alternatingContentBackgroundColors<R = unknown>(): R;
      controlAlternatingRowBackgroundColors<R = unknown>(): R;
      _selectionMaterialTintColor<R = unknown>(): R;
      controlAccentNoColor<R = unknown>(): R;
      controlAccentSilverColor<R = unknown>(): R;
      controlAccentRoseGoldColor<R = unknown>(): R;
      controlAccentGoldColor<R = unknown>(): R;
      controlAccentSpaceGrayColor<R = unknown>(): R;
      controlAccentPinkColor<R = unknown>(): R;
      controlAccentPurpleColor<R = unknown>(): R;
      controlAccentBlueColor<R = unknown>(): R;
      controlAccentGreenColor<R = unknown>(): R;
      controlAccentYellowColor<R = unknown>(): R;
      controlAccentOrangeColor<R = unknown>(): R;
      controlAccentRedColor<R = unknown>(): R;
      detailAccentColor<R = unknown>(): R;
      controlAccentColor<R = unknown>(): R;
      graphiteSelectedTextBackgroundColor<R = unknown>(): R;
      textCorrectionIndicatorColor<R = unknown>(): R;
      textGrammarIndicatorColor<R = unknown>(): R;
      textSpellingIndicatorColor<R = unknown>(): R;
      thinSplitViewDividerColor<R = unknown>(): R;
      underPageBackgroundColor<R = unknown>(): R;
      alternatingContentBackgroundColor<R = unknown>(): R;
      unemphasizedSelectedContentBackgroundColor<R = unknown>(): R;
      selectedContentTextColor<R = unknown>(): R;
      selectedContentBackgroundColor<R = unknown>(): R;
      contentBackgroundColor<R = unknown>(): R;
      separatorColor<R = unknown>(): R;
      containerBorderColor<R = unknown>(): R;
      findHighlightColor<R = unknown>(): R;
      springLoadedOverlayColor<R = unknown>(): R;
      linkColor<R = unknown>(): R;
      placeholderTextColor<R = unknown>(): R;
      alternateSelectionGraphiteColor<R = unknown>(): R;
      alternateSelectionBlueColor<R = unknown>(): R;
      systemTealColor<R = unknown>(): R;
      systemMintColor<R = unknown>(): R;
      systemGrayColor<R = unknown>(): R;
      systemPurpleColor<R = unknown>(): R;
      systemPinkColor<R = unknown>(): R;
      systemBrownColor<R = unknown>(): R;
      systemYellowColor<R = unknown>(): R;
      systemOrangeColor<R = unknown>(): R;
      systemBlueColor<R = unknown>(): R;
      systemGreenColor<R = unknown>(): R;
      systemRedColor<R = unknown>(): R;
      quaternaryLabelColor<R = unknown>(): R;
      tertiaryLabelColor<R = unknown>(): R;
      secondaryLabelColor<R = unknown>(): R;
      labelColor<R = unknown>(): R;
      controlAlternatingRowColor<R = unknown>(): R;
      _alternateDisabledSelectedControlTextColor<R = unknown>(): R;
      alternateSelectedControlTextColor<R = unknown>(): R;
      alternateSelectedControlColor<R = unknown>(): R;
      secondarySelectedControlColor<R = unknown>(): R;
      graphiteControlTintColor<R = unknown>(): R;
      clearControlTintColor<R = unknown>(): R;
      blueControlTintColor<R = unknown>(): R;
      windowBackgroundColor<R = unknown>(): R;
      selectedHeaderTextColor<R = unknown>(): R;
      headerTextColor<R = unknown>(): R;
      headerColor<R = unknown>(): R;
      progressIndicatorColor<R = unknown>(): R;
      keyboardFocusIndicatorColor<R = unknown>(): R;
      selectedMenuItemTextColor<R = unknown>(): R;
      selectedMenuItemColor<R = unknown>(): R;
      windowFrameTextColor<R = unknown>(): R;
      windowFrameColor<R = unknown>(): R;
      shadowColor<R = unknown>(): R;
      highlightColor<R = unknown>(): R;
      selectedKnobColor<R = unknown>(): R;
      knobColor<R = unknown>(): R;
      toolTipTextColor<R = unknown>(): R;
      toolTipColor<R = unknown>(): R;
      gridColor<R = unknown>(): R;
      scrollBarColor<R = unknown>(): R;
      disabledControlTextColor<R = unknown>(): R;
      selectedControlColor<R = unknown>(): R;
      selectedControlTextColor<R = unknown>(): R;
      unemphasizedSelectedTextBackgroundColor<R = unknown>(): R;
      unemphasizedSelectedTextColor<R = unknown>(): R;
      selectedTextBackgroundColor<R = unknown>(): R;
      selectedTextColor<R = unknown>(): R;
      controlTextColor<R = unknown>(): R;
      textBackgroundColor<R = unknown>(): R;
      textColor<R = unknown>(): R;
      controlLightHighlightColor<R = unknown>(): R;
      controlHighlightColor<R = unknown>(): R;
      controlBackgroundColor<R = unknown>(): R;
      controlColor<R = unknown>(): R;
      controlDarkShadowColor<R = unknown>(): R;
      controlShadowColor<R = unknown>(): R;
      quarternaryLabelColor<R = unknown>(): R;
      scrubberTexturedBackgroundColor<R = unknown>(): R;
      _darkLinenColor<R = unknown>(): R;
      linenColor<R = unknown>(): R;
      _linenPatternImage<R = unknown>(): R;
      sourceListBackgroundColor<R = unknown>(): R;
      _sourceListBackgroundColor<R = unknown>(): R;
      _lightTextEngravedOffsetTextColor<R = unknown>(): R;
      _lightTextEngravedDisabledForegroundTextColor<R = unknown>(): R;
      _lightTextEngravedActiveForegroundTextColor<R = unknown>(): R;
      _embossedOffsetTextColor<R = unknown>(): R;
      _embossedDisabledForegroundTextColor<R = unknown>(): R;
      _embossedActiveForegroundTextColor<R = unknown>(): R;
      _engravedMenuOffsetTextColor<R = unknown>(): R;
      _engravedOffsetTextColor<R = unknown>(): R;
      _engravedBoldDisabledForegroundTextColor<R = unknown>(): R;
      _engravedDisabledForegroundTextColor<R = unknown>(): R;
      _engravedBoldActiveForegroundTextColor<R = unknown>(): R;
      _engravedActiveForegroundTextColor<R = unknown>(): R;
      _graphiteKeyboardFocusColor<R = unknown>(): R;
      _blueKeyboardFocusColor<R = unknown>(): R;
      _graphiteAlternatingRowColor<R = unknown>(): R;
      _blueAlternatingRowColor<R = unknown>(): R;
      _clearControlTintColor<R = unknown>(): R;
      _graphiteControlTintColor<R = unknown>(): R;
      _blueControlTintColor<R = unknown>(): R;
      _defaultProgressIndicatorColor<R = unknown>(): R;
      _defaultSelectionColor<R = unknown>(): R;
      _lightBlueColor<R = unknown>(): R;
      _defaultSelectedKnobColor<R = unknown>(): R;
      _defaultKnobColor<R = unknown>(): R;
      _lightYellowColor<R = unknown>(): R;
      _gray136Color<R = unknown>(): R;
      _defaultSecondaryColor<R = unknown>(): R;
      _gray204Color<R = unknown>(): R;
      _gray221Color<R = unknown>(): R;
      grayDeviceColor<R = unknown>(): R;
      whiteDeviceColor<R = unknown>(): R;
      lightGrayDeviceColor<R = unknown>(): R;
      blackDeviceColor<R = unknown>(): R;
      brownColor<R = unknown>(): R;
      purpleColor<R = unknown>(): R;
      orangeColor<R = unknown>(): R;
      magentaColor<R = unknown>(): R;
      yellowColor<R = unknown>(): R;
      cyanColor<R = unknown>(): R;
      _blackRGBColor<R = unknown>(): R;
      _darkGrayRGBColor<R = unknown>(): R;
      _lightGrayRGBColor<R = unknown>(): R;
      _whiteRGBColor<R = unknown>(): R;
      _darkBlueColor<R = unknown>(): R;
      blueColor<R = unknown>(): R;
      greenColor<R = unknown>(): R;
      redColor<R = unknown>(): R;
      clearColor<R = unknown>(): R;
      grayColor<R = unknown>(): R;
      whiteColor<R = unknown>(): R;
      lightGrayColor<R = unknown>(): R;
      darkGrayColor<R = unknown>(): R;
      blackColor<R = unknown>(): R;
      controlStripSeparatorColor<R = unknown>(): R;
      colorWithCIColor<R = unknown, P0 = unknown>(_colorWithCIColor: P0): R;
      colorWithHex<R = unknown, P0 = unknown>(_colorWithHex: P0): R;
      colorWithHex_alpha_colorSpace<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_colorWithHex: P0, _alpha: P1, _colorSpace: P2): R;
      _userHighlightColors<R = unknown, P0 = number>(__userHighlightColors: P0): R;
      controlFillColor<R = unknown>(): R;
      scriptingColorWithDescriptor<R = unknown, P0 = unknown>(_scriptingColorWithDescriptor: P0): R;
      transparencyCheckboardPatternColor<R = unknown>(): R;
      // + NSColor(CHColorExtensions): 
      colorWithGray_alpha<R = unknown, P0 = number, P1 = number>(_colorWithGray: P0, _alpha: P1): R;
      colorWithGray<R = unknown, P0 = number>(_colorWithGray: P0): R;
      // + NSColor(MSTheme): 
      tintColorMildDark<R = unknown>(): R;
      tintColorMild<R = unknown>(): R;
      tintColorNormalDark<R = unknown>(): R;
      tintColorNormal<R = unknown>(): R;
      tintColorIntenseDark<R = unknown>(): R;
      tintColorIntense<R = unknown>(): R;
    }
  }
}

declare const NSColor: cocoa.NSColor.CLASS;
