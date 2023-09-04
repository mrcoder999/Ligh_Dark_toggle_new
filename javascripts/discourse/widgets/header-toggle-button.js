import { createWidget } from "discourse/widgets/widget";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

createToggle(iconName, labelName) {
      let title = I18n.t(themePrefix("toggle_description"));

      let toggle = h("div.scheme-toggle", { title }, [
        iconNode(iconName, { class: "scheme-icon" }),
        h("span", I18n.t(themePrefix(labelName))),
      ]);

      return h("a.widget-link.dark-light-toggle", [toggle]);
    }


createToggle(iconName, labelName) {
      let title = I18n.t(themePrefix("toggle_description"));

      let toggle = h("div.scheme-toggle", { title }, [
        iconNode(iconName, { class: "scheme-icon" }),
        h("span", I18n.t(themePrefix(labelName))),
      ]);

      return h("a.widget-link.dark-light-toggle", [toggle]);
    }

