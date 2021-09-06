// code generated by pbf v3.2.0
/* tslint:disable */
export var BulkMetadataRequest = {
    read: function (pbf, end) {
        return pbf.readFields(BulkMetadataRequest._readField, { node_key: null }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
    },
    write: function (obj, pbf) {
        if (obj.node_key)
            pbf.writeMessage(1, NodeKey.write, obj.node_key);
    }
};
export var NodeDataRequest = {
    read: function (pbf, end) {
        return pbf.readFields(NodeDataRequest._readField, { node_key: null, texture_format: 0, imagery_epoch: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 2)
            obj.texture_format = pbf.readVarint();
        else if (tag === 3)
            obj.imagery_epoch = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.node_key)
            pbf.writeMessage(1, NodeKey.write, obj.node_key);
        if (obj.texture_format)
            pbf.writeVarintField(2, obj.texture_format);
        if (obj.imagery_epoch)
            pbf.writeVarintField(3, obj.imagery_epoch);
    }
};
export var NodeKey = {
    read: function (pbf, end) {
        return pbf.readFields(NodeKey._readField, { path: "", epoch: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.path = pbf.readString();
        else if (tag === 2)
            obj.epoch = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.path)
            pbf.writeStringField(1, obj.path);
        if (obj.epoch)
            pbf.writeVarintField(2, obj.epoch);
    }
};
export var CopyrightRequest = {
    read: function (pbf, end) {
        return pbf.readFields(CopyrightRequest._readField, { epoch: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.epoch = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.epoch)
            pbf.writeVarintField(1, obj.epoch);
    }
};
export var TextureDataRequest = {
    read: function (pbf, end) {
        return pbf.readFields(TextureDataRequest._readField, { node_key: null, texture_format: 0, view_direction: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 2)
            obj.texture_format = pbf.readVarint();
        else if (tag === 3)
            obj.view_direction = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.node_key)
            pbf.writeMessage(1, NodeKey.write, obj.node_key);
        if (obj.texture_format)
            pbf.writeVarintField(2, obj.texture_format);
        if (obj.view_direction)
            pbf.writeVarintField(3, obj.view_direction);
    }
};
export var BulkMetadata = {
    read: function (pbf, end) {
        return pbf.readFields(BulkMetadata._readField, { node_metadata: [], head_node_key: null, head_node_center: [], meters_per_texel: [], default_imagery_epoch: 0, default_available_texture_formats: 0, default_available_view_dependent_textures: 0, default_available_view_dependent_texture_formats: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.node_metadata.push(NodeMetadata.read(pbf, pbf.readVarint() + pbf.pos));
        else if (tag === 2)
            obj.head_node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 3)
            pbf.readPackedDouble(obj.head_node_center);
        else if (tag === 4)
            pbf.readPackedFloat(obj.meters_per_texel);
        else if (tag === 5)
            obj.default_imagery_epoch = pbf.readVarint();
        else if (tag === 6)
            obj.default_available_texture_formats = pbf.readVarint();
        else if (tag === 7)
            obj.default_available_view_dependent_textures = pbf.readVarint();
        else if (tag === 8)
            obj.default_available_view_dependent_texture_formats = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.node_metadata)
            for (var i = 0; i < obj.node_metadata.length; i++)
                pbf.writeMessage(1, NodeMetadata.write, obj.node_metadata[i]);
        if (obj.head_node_key)
            pbf.writeMessage(2, NodeKey.write, obj.head_node_key);
        if (obj.head_node_center)
            pbf.writePackedDouble(3, obj.head_node_center);
        if (obj.meters_per_texel)
            pbf.writePackedFloat(4, obj.meters_per_texel);
        if (obj.default_imagery_epoch)
            pbf.writeVarintField(5, obj.default_imagery_epoch);
        if (obj.default_available_texture_formats)
            pbf.writeVarintField(6, obj.default_available_texture_formats);
        if (obj.default_available_view_dependent_textures)
            pbf.writeVarintField(7, obj.default_available_view_dependent_textures);
        if (obj.default_available_view_dependent_texture_formats)
            pbf.writeVarintField(8, obj.default_available_view_dependent_texture_formats);
    }
};
export var NodeMetadata = {
    read: function (pbf, end) {
        return pbf.readFields(NodeMetadata._readField, { path_and_flags: 0, epoch: 0, bulk_metadata_epoch: 0, oriented_bounding_box: null, meters_per_texel: 0, processing_oriented_bounding_box: [], imagery_epoch: 0, available_texture_formats: 0, available_view_dependent_textures: 0, available_view_dependent_texture_formats: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.path_and_flags = pbf.readVarint();
        else if (tag === 2)
            obj.epoch = pbf.readVarint();
        else if (tag === 5)
            obj.bulk_metadata_epoch = pbf.readVarint();
        else if (tag === 3)
            obj.oriented_bounding_box = pbf.readBytes();
        else if (tag === 4)
            obj.meters_per_texel = pbf.readFloat();
        else if (tag === 6)
            pbf.readPackedDouble(obj.processing_oriented_bounding_box);
        else if (tag === 7)
            obj.imagery_epoch = pbf.readVarint();
        else if (tag === 8)
            obj.available_texture_formats = pbf.readVarint();
        else if (tag === 9)
            obj.available_view_dependent_textures = pbf.readVarint();
        else if (tag === 10)
            obj.available_view_dependent_texture_formats = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.path_and_flags)
            pbf.writeVarintField(1, obj.path_and_flags);
        if (obj.epoch)
            pbf.writeVarintField(2, obj.epoch);
        if (obj.bulk_metadata_epoch)
            pbf.writeVarintField(5, obj.bulk_metadata_epoch);
        if (obj.oriented_bounding_box)
            pbf.writeBytesField(3, obj.oriented_bounding_box);
        if (obj.meters_per_texel)
            pbf.writeFloatField(4, obj.meters_per_texel);
        if (obj.processing_oriented_bounding_box)
            pbf.writePackedDouble(6, obj.processing_oriented_bounding_box);
        if (obj.imagery_epoch)
            pbf.writeVarintField(7, obj.imagery_epoch);
        if (obj.available_texture_formats)
            pbf.writeVarintField(8, obj.available_texture_formats);
        if (obj.available_view_dependent_textures)
            pbf.writeVarintField(9, obj.available_view_dependent_textures);
        if (obj.available_view_dependent_texture_formats)
            pbf.writeVarintField(10, obj.available_view_dependent_texture_formats);
    },
    Flags: {
        "RICH3D_LEAF": {
            "value": 1,
            "options": {}
        },
        "RICH3D_NODATA": {
            "value": 2,
            "options": {}
        },
        "LEAF": {
            "value": 4,
            "options": {}
        },
        "NODATA": {
            "value": 8,
            "options": {}
        },
        "USE_IMAGERY_EPOCH": {
            "value": 16,
            "options": {}
        }
    }
};
export var NodeData = {
    read: function (pbf, end) {
        return pbf.readFields(NodeData._readField, { matrix_globe_from_mesh: [], meshes: [], copyright_ids: [], node_key: null, kml_bounding_box: [], water_mesh: null, overlay_surface_meshes: [], for_normals: null }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            pbf.readPackedDouble(obj.matrix_globe_from_mesh);
        else if (tag === 2)
            obj.meshes.push(Mesh.read(pbf, pbf.readVarint() + pbf.pos));
        else if (tag === 3)
            pbf.readPackedVarint(obj.copyright_ids);
        else if (tag === 4)
            obj.node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 5)
            pbf.readPackedDouble(obj.kml_bounding_box);
        else if (tag === 6)
            obj.water_mesh = Mesh.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 7)
            obj.overlay_surface_meshes.push(Mesh.read(pbf, pbf.readVarint() + pbf.pos));
        else if (tag === 8)
            obj.for_normals = pbf.readBytes();
    },
    write: function (obj, pbf) {
        if (obj.matrix_globe_from_mesh)
            pbf.writePackedDouble(1, obj.matrix_globe_from_mesh);
        if (obj.meshes)
            for (var i = 0; i < obj.meshes.length; i++)
                pbf.writeMessage(2, Mesh.write, obj.meshes[i]);
        if (obj.copyright_ids)
            for (i = 0; i < obj.copyright_ids.length; i++)
                pbf.writeVarintField(3, obj.copyright_ids[i]);
        if (obj.node_key)
            pbf.writeMessage(4, NodeKey.write, obj.node_key);
        if (obj.kml_bounding_box)
            pbf.writePackedDouble(5, obj.kml_bounding_box);
        if (obj.water_mesh)
            pbf.writeMessage(6, Mesh.write, obj.water_mesh);
        if (obj.overlay_surface_meshes)
            for (i = 0; i < obj.overlay_surface_meshes.length; i++)
                pbf.writeMessage(7, Mesh.write, obj.overlay_surface_meshes[i]);
        if (obj.for_normals)
            pbf.writeBytesField(8, obj.for_normals);
    }
};
export var Mesh = {
    read: function (pbf, end) {
        return pbf.readFields(Mesh._readField, { vertices: null, vertex_alphas: null, texture_coords: null, indices: null, octant_ranges: null, layer_counts: null, texture: [], texture_coordinates: null, uv_offset_and_scale: [], layer_and_octant_counts: null, normals: null, normals_dev: null, mesh_id: 0, skirt_flags: null }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.vertices = pbf.readBytes();
        else if (tag === 9)
            obj.vertex_alphas = pbf.readBytes();
        else if (tag === 2)
            obj.texture_coords = pbf.readBytes();
        else if (tag === 3)
            obj.indices = pbf.readBytes();
        else if (tag === 4)
            obj.octant_ranges = pbf.readBytes();
        else if (tag === 5)
            obj.layer_counts = pbf.readBytes();
        else if (tag === 6)
            obj.texture.push(Texture.read(pbf, pbf.readVarint() + pbf.pos));
        else if (tag === 7)
            obj.texture_coordinates = pbf.readBytes();
        else if (tag === 10)
            pbf.readPackedFloat(obj.uv_offset_and_scale);
        else if (tag === 8)
            obj.layer_and_octant_counts = pbf.readBytes();
        else if (tag === 11)
            obj.normals = pbf.readBytes();
        else if (tag === 16)
            obj.normals_dev = pbf.readBytes();
        else if (tag === 12)
            obj.mesh_id = pbf.readVarint();
        else if (tag === 13)
            obj.skirt_flags = pbf.readBytes();
    },
    write: function (obj, pbf) {
        if (obj.vertices)
            pbf.writeBytesField(1, obj.vertices);
        if (obj.vertex_alphas)
            pbf.writeBytesField(9, obj.vertex_alphas);
        if (obj.texture_coords)
            pbf.writeBytesField(2, obj.texture_coords);
        if (obj.indices)
            pbf.writeBytesField(3, obj.indices);
        if (obj.octant_ranges)
            pbf.writeBytesField(4, obj.octant_ranges);
        if (obj.layer_counts)
            pbf.writeBytesField(5, obj.layer_counts);
        if (obj.texture)
            for (var i = 0; i < obj.texture.length; i++)
                pbf.writeMessage(6, Texture.write, obj.texture[i]);
        if (obj.texture_coordinates)
            pbf.writeBytesField(7, obj.texture_coordinates);
        if (obj.uv_offset_and_scale)
            pbf.writePackedFloat(10, obj.uv_offset_and_scale);
        if (obj.layer_and_octant_counts)
            pbf.writeBytesField(8, obj.layer_and_octant_counts);
        if (obj.normals)
            pbf.writeBytesField(11, obj.normals);
        if (obj.normals_dev)
            pbf.writeBytesField(16, obj.normals_dev);
        if (obj.mesh_id)
            pbf.writeVarintField(12, obj.mesh_id);
        if (obj.skirt_flags)
            pbf.writeBytesField(13, obj.skirt_flags);
    },
    Layer: {
        "OVERGROUND": {
            "value": 0,
            "options": {}
        },
        "TERRAIN_BELOW_WATER": {
            "value": 1,
            "options": {}
        },
        "TERRAIN_ABOVE_WATER": {
            "value": 2,
            "options": {}
        },
        "TERRAIN_HIDDEN": {
            "value": 3,
            "options": {}
        },
        "WATER": {
            "value": 4,
            "options": {}
        },
        "WATER_SKIRTS": {
            "value": 5,
            "options": {}
        },
        "WATER_SKIRTS_INVERTED": {
            "value": 6,
            "options": {}
        },
        "OVERLAY_SURFACE": {
            "value": 7,
            "options": {}
        },
        "OVERLAY_SURFACE_SKIRTS": {
            "value": 8,
            "options": {}
        },
        "NUM_LAYERS": {
            "value": 9,
            "options": {}
        }
    },
    LayerMask: {
        "TERRAIN_WITH_OVERGROUND": {
            "value": 7,
            "options": {}
        },
        "TERRAIN_WITH_WATER": {
            "value": 28,
            "options": {}
        },
        "TERRAIN_WITHOUT_WATER": {
            "value": 14,
            "options": {}
        }
    }
};
export var Texture = {
    read: function (pbf, end) {
        return pbf.readFields(Texture._readField, { data: [], format: 0, width: 256, height: 256, view_direction: 0, mesh_id: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.data.push(pbf.readBytes());
        else if (tag === 2)
            obj.format = pbf.readVarint();
        else if (tag === 3)
            obj.width = pbf.readVarint();
        else if (tag === 4)
            obj.height = pbf.readVarint();
        else if (tag === 5)
            obj.view_direction = pbf.readVarint();
        else if (tag === 6)
            obj.mesh_id = pbf.readVarint();
    },
    write: function (obj, pbf) {
        if (obj.data)
            for (var i = 0; i < obj.data.length; i++)
                pbf.writeBytesField(1, obj.data[i]);
        if (obj.format)
            pbf.writeVarintField(2, obj.format);
        if (obj.width != undefined && obj.width !== 256)
            pbf.writeVarintField(3, obj.width);
        if (obj.height != undefined && obj.height !== 256)
            pbf.writeVarintField(4, obj.height);
        if (obj.view_direction)
            pbf.writeVarintField(5, obj.view_direction);
        if (obj.mesh_id)
            pbf.writeVarintField(6, obj.mesh_id);
    },
    Format: {
        "JPG": {
            "value": 1,
            "options": {}
        },
        "DXT1": {
            "value": 2,
            "options": {}
        },
        "ETC1": {
            "value": 3,
            "options": {}
        },
        "PVRTC2": {
            "value": 4,
            "options": {}
        },
        "PVRTC4": {
            "value": 5,
            "options": {}
        },
        "CRN_DXT1": {
            "value": 6,
            "options": {}
        }
    },
    ViewDirection: {
        "NADIR": {
            "value": 0,
            "options": {}
        },
        "NORTH_45": {
            "value": 1,
            "options": {}
        },
        "EAST_45": {
            "value": 2,
            "options": {}
        },
        "SOUTH_45": {
            "value": 3,
            "options": {}
        },
        "WEST_45": {
            "value": 4,
            "options": {}
        }
    }
};
export var TextureData = {
    read: function (pbf, end) {
        return pbf.readFields(TextureData._readField, { node_key: null, textures: [] }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.node_key = NodeKey.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 2)
            obj.textures.push(Texture.read(pbf, pbf.readVarint() + pbf.pos));
    },
    write: function (obj, pbf) {
        if (obj.node_key)
            pbf.writeMessage(1, NodeKey.write, obj.node_key);
        if (obj.textures)
            for (var i = 0; i < obj.textures.length; i++)
                pbf.writeMessage(2, Texture.write, obj.textures[i]);
    }
};
export var Copyrights = {
    read: function (pbf, end) {
        return pbf.readFields(Copyrights._readField, { copyrights: [] }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.copyrights.push(Copyright.read(pbf, pbf.readVarint() + pbf.pos));
    },
    write: function (obj, pbf) {
        if (obj.copyrights)
            for (var i = 0; i < obj.copyrights.length; i++)
                pbf.writeMessage(1, Copyright.write, obj.copyrights[i]);
    }
};
export var Copyright = {
    read: function (pbf, end) {
        return pbf.readFields(Copyright._readField, { id: 0, text: "", text_clean: "" }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.id = pbf.readVarint();
        else if (tag === 2)
            obj.text = pbf.readString();
        else if (tag === 3)
            obj.text_clean = pbf.readString();
    },
    write: function (obj, pbf) {
        if (obj.id)
            pbf.writeVarintField(1, obj.id);
        if (obj.text)
            pbf.writeStringField(2, obj.text);
        if (obj.text_clean)
            pbf.writeStringField(3, obj.text_clean);
    }
};
export var PlanetoidMetadata = {
    read: function (pbf, end) {
        return pbf.readFields(PlanetoidMetadata._readField, { root_node_metadata: null, radius: 0, min_terrain_altitude: 0, max_terrain_altitude: 0 }, end);
    },
    _readField: function (tag, obj, pbf) {
        if (tag === 1)
            obj.root_node_metadata = NodeMetadata.read(pbf, pbf.readVarint() + pbf.pos);
        else if (tag === 2)
            obj.radius = pbf.readFloat();
        else if (tag === 3)
            obj.min_terrain_altitude = pbf.readFloat();
        else if (tag === 4)
            obj.max_terrain_altitude = pbf.readFloat();
    },
    write: function (obj, pbf) {
        if (obj.root_node_metadata)
            pbf.writeMessage(1, NodeMetadata.write, obj.root_node_metadata);
        if (obj.radius)
            pbf.writeFloatField(2, obj.radius);
        if (obj.min_terrain_altitude)
            pbf.writeFloatField(3, obj.min_terrain_altitude);
        if (obj.max_terrain_altitude)
            pbf.writeFloatField(4, obj.max_terrain_altitude);
    }
};
//# sourceMappingURL=rocktree.js.map