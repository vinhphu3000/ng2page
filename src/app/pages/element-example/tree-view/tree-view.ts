/**
 * Created by nguyenlet on 4/14/2016.
 * Harveynash
 */

import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Utility} from "../../../common/utility";

@Component({
    selector: 'tree-view-page',
    directives: [],
    templateUrl: './dist/app/pages/element-example/tree-view/tree-view.html',
    providers: []
})

export class TreeViewPage implements AfterViewInit, OnInit {

    public errorMessage:string;

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {

        //noinspection TypeScriptUnresolvedVariable
        $.Pages.init();

        this._init();

        //noinspection TypeScriptUnresolvedFunction
        //layout();

        $(window).trigger('ngAfterViewInit');
        console.log('TreeViewPage - AfterViewInit');

    }

    ngOnInit() {
        console.log('TreeViewPage - Init');
    }

    //noinspection TypeScriptUnresolvedVariable
    private _init() {
        // Treeview hierarchy configuration
        var treeData = [{
            title: "item1 with key and tooltip",
            tooltip: "Look, a tool tip!"
        }, {
            title: "item2: selected on init",
            select: true
        }, {
            title: "Folder",
            isFolder: true,
            key: "id3",
            children: [{
                title: "Sub-item 3.1",
                children: [{
                    title: "Sub-item 3.1.1",
                    key: "id3.1.1"
                }, {
                    title: "Sub-item 3.1.2",
                    key: "id3.1.2"
                }]
            }, {
                title: "Sub-item 3.2",
                children: [{
                    title: "Sub-item 3.2.1",
                    key: "id3.2.1"
                }, {
                    title: "Sub-item 3.2.2",
                    key: "id3.2.2"
                }]
            }]
        }, {
            title: "Document with some children (expanded on init)",
            key: "id4",
            expand: true,
            children: [{
                title: "Sub-item 4.1 (active on init)",
                activate: true,
                children: [{
                    title: "Sub-item 4.1.1",
                    key: "id4.1.1"
                }, {
                    title: "Sub-item 4.1.2",
                    key: "id4.1.2"
                }]
            }, {
                title: "Sub-item 4.2 (selected on init)",
                select: true,
                children: [{
                    title: "Sub-item 4.2.1",
                    key: "id4.2.1"
                }, {
                    title: "Sub-item 4.2.2",
                    key: "id4.2.2"
                }]
            }, {
                title: "Sub-item 4.3 (hideCheckbox)",
                hideCheckbox: true
            }, {
                title: "Sub-item 4.4 (unselectable)",
                unselectable: true
            }]
        }];

        //noinspection TypeScriptUnresolvedFunction
        $("#default-tree").dynatree({
            fx: {
                height: "toggle",
                duration: 200
            } //Slide down animation
        });
        //noinspection TypeScriptUnresolvedFunction
        $("#drag-tree").dynatree({
            fx: {
                height: "toggle",
                duration: 200
            }, //Slide down animation
            dnd: {
                preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
                onDragStart: function (node) {
                    /** This function MUST be defined to enable dragging for the tree.
                     *  Return false to cancel dragging of node.
                     */
                    return true;
                },
                onDragEnter: function (node, sourceNode) {
                    /** sourceNode may be null for non-dynatree droppables.
                     *  Return false to disallow dropping on node. In this case
                     *  onDragOver and onDragLeave are not called.
                     *  Return 'over', 'before, or 'after' to force a hitMode.
                     *  Return ['before', 'after'] to restrict available hitModes.
                     *  Any other return value will calc the hitMode from the cursor position.
                     */
                    // Prevent dropping a parent below another parent (only sort
                    // nodes under the same parent)
                    if (node.parent !== sourceNode.parent) {
                        return false;
                    }
                    // Don't allow dropping *over* a node (would create a child)
                    return ["before", "after"];
                },
                onDrop: function (node, sourceNode, hitMode, ui, draggable) {
                    /** This function MUST be defined to enable dropping of items on
                     *  the tree.
                     */
                    sourceNode.move(node, hitMode);
                }
            }
        });

        //noinspection TypeScriptUnresolvedFunction
        $("#check-tree").dynatree({
            checkbox: true,
            selectMode: 2,
            children: treeData,
            onSelect: function (select, node) {
                // Display list of selected nodes
                var selNodes = node.tree.getSelectedNodes();
                // convert to title/key array
                var selKeys = $.map(selNodes, function (node) {
                    return "[" + node.data.key + "]: '" + node.data.title + "'";
                });
                $("#echoSelection2").text(selKeys.join(", "));
            },
            onClick: function (node, event) {
                // We should not toggle, if target was "checkbox", because this
                // would result in double-toggle (i.e. no toggle)
                if (node.getEventTargetType(event) == "title")
                    node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            // The following options are only required, if we have more than one tree on one page:
            cookieId: "dynatree-Cb2",
            idPrefix: "dynatree-Cb2-"
        });

        //noinspection TypeScriptUnresolvedFunction
        $("#radio-tree").dynatree({
            checkbox: true,
            // Override class name for checkbox icon:
            classNames: {
                checkbox: "dynatree-radio"
            },
            selectMode: 1,
            children: treeData,
            onActivate: function (node) {
                $("#echoActive1").text(node.data.title);
            },
            onSelect: function (select, node) {
                // Display list of selected nodes
                var s = node.tree.getSelectedNodes().join(", ");
                $("#echoSelection1").text(s);
            },
            onDblClick: function (node, event) {
                node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            // The following options are only required, if we have more than one tree on one page:
            //      initId: "treeData",
            cookieId: "dynatree-Cb1",
            idPrefix: "dynatree-Cb1-"
        });
    }

}



