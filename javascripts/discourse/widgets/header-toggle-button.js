import { createWidget } from "discourse/widgets/widget";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

createWidget("dark-light-toggle", {
        tagName: "li.dark-light-toggle.icon",

        buildKey: () => "dark-light-toggle",

        buildId: () => "dark-light-toggle",

        click() {
          toggleDarkLight();
          this.scheduleRerender();
        },

        selectedScheme(scheme) {
          if (activeScheme() === scheme) {
            return ".selected";
          }

          return "";
        },

        html() {
          return h(`label.switch.${activeScheme()}`, [
            h(`span.slider.round`, ""),
            h(
              `span.toggle-icon.round.dark${this.selectedScheme("light")}`,
              iconNode("sun", {
                class: "scheme-icon",
              })
            ),
            h(
              `span.toggle-icon.round.light${this.selectedScheme("dark")}`,
              iconNode("far-moon", {
                class: "scheme-icon",
              })
            ),
          ]);
        },
      });
