CKEDITOR.plugins.add('grafikart',
{
	requires : [ 'iframedialog' ],
	lang : [ 'de' ],
	
	init : function(editor)
	{
		var pluginName = 'grafikart';

		CKEDITOR.dialog.add('grafikart', this.path + 'dialogs/grafikart.js' );

		
		editor.addCommand( 'grafikart', new CKEDITOR.dialogCommand( 'grafikart' ) );

		editor.ui.addButton('Grafikart',
		{
				label : 'Bild hinzufügen',
				command : pluginName,
				icon: this.path + 'images/grafikart.png'
		});
	}
});

