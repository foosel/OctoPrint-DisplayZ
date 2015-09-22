import octoprint.plugin

class DisplayZPlugin(octoprint.plugin.AssetPlugin):

	def get_assets(self):
		return dict(
			js=["js/displayz.js"]
		)

__plugin_implementation__ = DisplayZPlugin()
