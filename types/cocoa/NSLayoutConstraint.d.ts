/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutConstraint<T0 = void, T1 = void, T2 = void> extends NSObject, NSISConstraintProtocol {
    _setActive_mutuallyExclusiveConstraints<R = void, P0 = boolean, P1 = unknown>(__setActive: P0, _mutuallyExclusiveConstraints: P1): R;
    _nsib_isRedundant<R = boolean>(): R;
    _nsib_isRedundantInEngine<R = boolean, P0 = unknown>(__nsib_isRedundantInEngine: P0): R;
    _layoutEngine<R = unknown>(): R;
    _explainUnsatisfaction<R = unknown>(): R;
    _forceSatisfactionMeasuringUnsatisfactionChanges_andMutuallyExclusiveConstraints<R = void, P0 = unknown, P1 = unknown>(__forceSatisfactionMeasuringUnsatisfactionChanges: P0, _andMutuallyExclusiveConstraints: P1): R;
    _tryToActivateMeasuringUnsatisfactionChanges_andMutuallyExclusiveConstraints<R = void, P0 = unknown, P1 = unknown>(__tryToActivateMeasuringUnsatisfactionChanges: P0, _andMutuallyExclusiveConstraints: P1): R;
    _loweredExpression<R = unknown>(): R;
    _lowerIntoExpression_reportingConstantIsRounded<R = boolean, P0 = unknown, P1 = string>(__lowerIntoExpression: P0, _reportingConstantIsRounded: P1): R;
    _engineToContainerScalingCoefficients<R = CGSize>(): R;
    _makeExtraVars<R = void>(): R;
    _removeFromEngine<R = void, P0 = unknown>(__removeFromEngine: P0): R;
    _addToEngine<R = void, P0 = unknown>(__addToEngine: P0): R;
    _addToEngine_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown>(__addToEngine: P0, _mutuallyExclusiveConstraints: P1): R;
    _addToEngine_integralizationAdjustment_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(__addToEngine: P0, _integralizationAdjustment: P1, _mutuallyExclusiveConstraints: P2): R;
    _addLoweredExpression_toEngine_lastLoweredConstantWasRounded_mutuallyExclusiveConstraints<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(__addLoweredExpression: P0, _toEngine: P1, _lastLoweredConstantWasRounded: P2, _mutuallyExclusiveConstraints: P3): R;
    priorityForVariable<R = number, P0 = unknown>(_priorityForVariable: P0): R;
    _constraintValueCopy<R = unknown>(): R;
    _setMutablePropertiesFromConstraint<R = void, P0 = unknown>(__setMutablePropertiesFromConstraint: P0): R;
    _isEqualToConstraintValue_includingConstant_includeOtherMutableProperties<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(__isEqualToConstraintValue: P0, _includingConstant: P1, _includeOtherMutableProperties: P2): R;
    _constraintValueHashIncludingConstant_includeOtherMutableProperties<R = number, P0 = boolean, P1 = boolean>(__constraintValueHashIncludingConstant: P0, _includeOtherMutableProperties: P1): R;
    _describesSameRestrictionAsConstraint<R = boolean, P0 = unknown>(__describesSameRestrictionAsConstraint: P0): R;
    _referencesLayoutItem<R = boolean, P0 = unknown>(__referencesLayoutItem: P0): R;
    _constraintByReplacingView_withView<R = unknown, P0 = unknown, P1 = unknown>(__constraintByReplacingView: P0, _withView: P1): R;
    _constraintByReplacingItem_withItem<R = unknown, P0 = unknown, P1 = unknown>(__constraintByReplacingItem: P0, _withItem: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _deallocSafeDescription<R = unknown>(): R;
    equationDescription<R = unknown>(): R;
    descriptionAccessory<R = unknown>(): R;
    _priorityDescription<R = unknown>(): R;
    asciiArtDescription<R = unknown>(): R;
    _constraintType<R = number>(): R;
    dealloc<R = void>(): R;
    _setSymbolicConstant<R = void, P0 = unknown>(__setSymbolicConstant: P0): R;
    _symbolicConstant<R = unknown>(): R;
    _constantDescriptionForDTrace<R = unknown>(): R;
    _descriptionforSymbolicConstant<R = unknown>(): R;
    _setSymbolicConstant_constant<R = void, P0 = unknown, P1 = number>(__setSymbolicConstant: P0, _constant: P1): R;
    _effectiveConstant_error<R = boolean, P0 = number, P1 = unknown>(__effectiveConstant: P0, _error: P1): R;
    _containerGeometryDidChange<R = void>(): R;
    _tryToChangeContainerGeometryWithUndoHandler<R = boolean, P0 = CDUnknownBlockType>(__tryToChangeContainerGeometryWithUndoHandler: P0): R;
    _clearWeakContainerReference<R = void>(): R;
    _loweredConstantIsRounded<R = boolean>(): R;
    _allocationDescription<R = unknown>(): R;
    _setPrimitiveConstraintType<R = void, P0 = number>(__setPrimitiveConstraintType: P0): R;
    _primitiveConstraintType<R = number>(): R;
    _setDeferDTraceLogging<R = void, P0 = boolean>(__setDeferDTraceLogging: P0): R;
    _deferDTraceLogging<R = boolean>(): R;
    _setNegativeExtraVar<R = void, P0 = unknown>(__setNegativeExtraVar: P0): R;
    _negativeExtraVar<R = unknown>(): R;
    _setMarkerAndPositiveErrorVar<R = void, P0 = unknown>(__setMarkerAndPositiveErrorVar: P0): R;
    _markerAndPositiveExtraVar<R = unknown>(): R;
    _allowedMagnitudeForIntegralizationAdjustment<R = number>(): R;
    _fudgeIncrement<R = number>(): R;
    _isFudgeable<R = boolean>(): R;
    setAnimations<R = void, P0 = unknown>(_setAnimations: P0): R;
    animations<R = unknown>(): R;
    _setIdentifier<R = void, P0 = unknown>(__setIdentifier: P0): R;
    _identifier<R = unknown>(): R;
    setHasBeenLowered<R = void, P0 = boolean>(_setHasBeenLowered: P0): R;
    _existsInEngine<R = boolean, P0 = unknown>(__existsInEngine: P0): R;
    _isIBPrototypingLayoutConstraint<R = boolean>(): R;
    _setSecondItem_attribute<R = void, P0 = unknown, P1 = number>(__setSecondItem: P0, _attribute: P1): R;
    _setFirstItem_attribute<R = void, P0 = unknown, P1 = number>(__setFirstItem: P0, _attribute: P1): R;
    dissatisfaction<R = number>(): R;
    sourceRuleHierarchy<R = unknown>(): R;
    _ancestorRuleNodes<R = unknown>(): R;
    secondAnchor<R = NSLayoutAnchor>(): R;
    setSecondAnchor<R = void, P0 = NSLayoutAnchor>(_v: P0): R;
    firstAnchor<R = NSLayoutAnchor>(): R;
    setFirstAnchor<R = void, P0 = NSLayoutAnchor>(_v: P0): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
    _referencedLayoutItems<R = NSSet>(): R;
    description<R = NSString>(): R;
    symbolicConstant<R = NSString>(): R;
    setSymbolicConstant<R = void, P0 = NSString>(_v: P0): R;
    constant<R = number>(): R;
    setConstant<R = void, P0 = number>(_v: P0): R;
    _containerDeclaredConstraint<R = boolean>(): R;
    set_containerDeclaredConstraint<R = void, P0 = boolean>(_v: P0): R;
    container<R = unknown>(): R;
    setContainer<R = void, P0 = unknown>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    hasBeenLowered<R = boolean>(): R;
    priority<R = number>(): R;
    setPriority<R = void, P0 = number>(_v: P0): R;
    shouldBeArchived<R = boolean>(): R;
    setShouldBeArchived<R = void, P0 = boolean>(_v: P0): R;
    secondAttribute<R = number>(): R;
    secondItem<R = unknown>(): R;
    multiplier<R = number>(): R;
    setMultiplier<R = void, P0 = number>(_v: P0): R;
    relation<R = number>(): R;
    setRelation<R = void, P0 = number>(_v: P0): R;
    firstAttribute<R = number>(): R;
    firstItem<R = unknown>(): R;
    loweredConstantNeedsUpdate<R = boolean>(): R;
    setLoweredConstantNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
    unsatisfaction<R = number>(): R;
    _associatedRuleNode<R = _NSConstraintDescriptionLayoutRuleNode>(): R;
    set_associatedRuleNode<R = void, P0 = _NSConstraintDescriptionLayoutRuleNode>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSLayoutConstraint(NSAnimation): 
    animationForKey<R = unknown, P0 = unknown>(_animationForKey: P0): R;
    animator<R = unknown>(): R;
    // + NSLayoutConstraint(NSConsistentLayoutIntegralization): 
    _usingConsistentIntegralization<R = boolean>(): R;
    // + NSLayoutConstraint(NSConstraintSourceDetection): 
    _isPrototypingConstraint<R = boolean>(): R;
    // + NSLayoutConstraint(NSLayoutConstraintVisualization): 
    _geometricCompare<R = number, P0 = unknown>(__geometricCompare: P0): R;
    _visualCenterInWindowSpace<R = CGPoint>(): R;
    _orientation<R = number>(): R;
    // + NSLayoutConstraint(NSSymbolicConstantResolution): 
    defaultResolvedValue_forSymbolicConstant_error<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(_defaultResolvedValue: P0, _forSymbolicConstant: P1, _error: P2): R;
    // + NSLayoutConstraint(NSTabBarExtras): 
    _setConstant_animated<R = void, P0 = number, P1 = boolean>(__setConstant: P0, _animated: P1): R;
    // + NSLayoutConstraint(Utility): 
    isRequired<R = boolean>(): R;
  }
  namespace NSLayoutConstraint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSISConstraintProtocol {
      alloc<R = NSLayoutConstraint>(): R;
      new: <R = NSLayoutConstraint>() => R;
      constraintWithAnchor_relatedBy_constant<R = unknown, P0 = unknown, P1 = number, P2 = number>(_constraintWithAnchor: P0, _relatedBy: P1, _constant: P2): R;
      constraintWithAnchor_relatedBy_toAnchor_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = number>(_constraintWithAnchor: P0, _relatedBy: P1, _toAnchor: P2, _multiplier: P3, _constant: P4): R;
      constraintWithItem_attribute_relatedBy_constant<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _constant: P3): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute_constant<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _constant: P5): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = number>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5, _constant: P6): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_symbolicConstant<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = unknown>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5, _symbolicConstant: P6): R;
      constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_symbolicConstant_theme<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = unknown, P7 = unknown>(_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5, _symbolicConstant: P6, _theme: P7): R;
      constraintsWithVisualFormat_options_metrics_views<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_constraintsWithVisualFormat: P0, _options: P1, _metrics: P2, _views: P3): R;
      _findCommonAncestorOfItem_andItem<R = unknown, P0 = unknown, P1 = unknown>(__findCommonAncestorOfItem: P0, _andItem: P1): R;
      _addOrRemoveConstraints_activate<R = void, P0 = unknown, P1 = boolean>(__addOrRemoveConstraints: P0, _activate: P1): R;
      deactivateConstraints<R = void, P0 = unknown>(_deactivateConstraints: P0): R;
      activateConstraints<R = void, P0 = unknown>(_activateConstraints: P0): R;
      _setLegacyDecodingOnly<R = void, P0 = boolean>(__setLegacyDecodingOnly: P0): R;
      _constraintConstantLimit<R = number>(): R;
      // + NSLayoutConstraint(NSAnimation): 
      defaultAnimationForKey<R = unknown, P0 = unknown>(_defaultAnimationForKey: P0): R;
      // + NSLayoutConstraint(NSConsistentLayoutIntegralization): 
      _constraintConstantLimit<R = number>(): R;
      // + NSLayoutConstraint(NSLayoutConstraintConveniences): 
      _ns_constraintsWithItem_attribute_toItem_attribute_inequalityRelation_inequalityIdentifier_inequalityPriority_inequalityConstant_equivalencePriority_equivalenceIdentifier_equalityConstant_layoutDirection<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = number, P5 = unknown, P6 = number, P7 = number, P8 = number, P9 = unknown, P10 = number, P11 = number>(__ns_constraintsWithItem: P0, _attribute: P1, _toItem: P2, _attribute1: P3, _inequalityRelation: P4, _inequalityIdentifier: P5, _inequalityPriority: P6, _inequalityConstant: P7, _equivalencePriority: P8, _equivalenceIdentifier: P9, _equalityConstant: P10, _layoutDirection: P11): R;
      _ns_constraintsWithItem_attribute_toItem_attribute_constant_inequalityRelation_inequalityIdentifier_inequalityPriority_equivalencePriority_equivalenceIdentifier_layoutDirection<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = number, P5 = number, P6 = unknown, P7 = number, P8 = number, P9 = unknown, P10 = number>(__ns_constraintsWithItem: P0, _attribute: P1, _toItem: P2, _attribute1: P3, _constant: P4, _inequalityRelation: P5, _inequalityIdentifier: P6, _inequalityPriority: P7, _equivalencePriority: P8, _equivalenceIdentifier: P9, _layoutDirection: P10): R;
      _ns_constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant_layoutDirection_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = number, P7 = number, P8 = number, P9 = unknown>(__ns_constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5, _constant: P6, _layoutDirection: P7, _priority: P8, _identifier: P9): R;
      // + NSLayoutConstraint(NSTabBarExtras): 
      _constraintsMatchingFrameOfView_withFrameOfView_edgeInsets_priority<R = unknown, P0 = unknown, P1 = unknown, P2 = NSEdgeInsets, P3 = number>(__constraintsMatchingFrameOfView: P0, _withFrameOfView: P1, _edgeInsets: P2, _priority: P3): R;
      _constraintsMatchingFrameOfView_withFrameOfView_edgeInsets<R = unknown, P0 = unknown, P1 = unknown, P2 = NSEdgeInsets>(__constraintsMatchingFrameOfView: P0, _withFrameOfView: P1, _edgeInsets: P2): R;
      _constraintsMatchingFrameOfView_withFrameOfView<R = unknown, P0 = unknown, P1 = unknown>(__constraintsMatchingFrameOfView: P0, _withFrameOfView: P1): R;
      _constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant_priority<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = number, P7 = number>(__constraintWithItem: P0, _attribute: P1, _relatedBy: P2, _toItem: P3, _attribute1: P4, _multiplier: P5, _constant: P6, _priority: P7): R;
      _minimizingConstraintWithItem_attribute<R = unknown, P0 = unknown, P1 = number>(__minimizingConstraintWithItem: P0, _attribute: P1): R;
    }
  }
}

declare const NSLayoutConstraint: cocoa.NSLayoutConstraint.CLASS;
