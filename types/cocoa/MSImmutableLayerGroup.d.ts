/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayerGroup<T = any> extends _MSImmutableLayerGroup, MSFlowContainmentCheckProtocol, MSLayerGroupProtocol {
    layersAreEqualForDiffToLayersOfLayerGroup<R = boolean, P0 = unknown>(_layersAreEqualForDiffToLayersOfLayerGroup: P0): R;
    rectByApplyingEdgePaddingsToRect<R = CGRect, P0 = CGRect>(_rectByApplyingEdgePaddingsToRect: P0): R;
    booleanOperationForLayer<R = number, P0 = unknown>(_booleanOperationForLayer: P0): R;
    pathCombiningChildrenByApplyingBlock<R = unknown, P0 = CDUnknownBlockType>(_pathCombiningChildrenByApplyingBlock: P0): R;
    allowsBlur<R = boolean>(): R;
    influenceRectClipsToBounds<R = boolean>(): R;
    includeChildrenInCalculatingStyleSize<R = boolean>(): R;
    subObjectsForTreeDiff<R = unknown>(): R;
    shadowsFollowRotation<R = boolean>(): R;
    childRectShouldResizeOnlyVertically_inParentOfSize<R = boolean, P0 = CGRect, P1 = CGSize>(_childRectShouldResizeOnlyVertically: P0, _inParentOfSize: P1): R;
    childRectShouldResizeOnlyHorizontally_inParentOfSize<R = boolean, P0 = CGRect, P1 = CGSize>(_childRectShouldResizeOnlyHorizontally: P0, _inParentOfSize: P1): R;
    constraintForLayer<R = number, P0 = unknown>(_constraintForLayer: P0): R;
    migratePropertiesFromV109OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV109OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV90OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV90OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV78OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV78OrEarlierWithUnarchiver: P0): R;
    mirrorViewPortSize<R = CGSize>(): R;
    mirrorExportScale<R = number>(): R;
    layers<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSImmutableLayerGroup<T = any> extends _MSImmutableLayerGroup, MSFlowContainmentCheckProtocol, MSLayerGroupProtocol {
      alloc<R = MSImmutableLayerGroup>(): R;
      new: <R = MSImmutableLayerGroup>() => R;
    }
  }
}

declare const MSImmutableLayerGroup: cocoa.classes.MSImmutableLayerGroup;
