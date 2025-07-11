import "./form.css";
import { ElementBuilder, labelAndInput } from "@sarawebs/sb-utils";

export default function () {
  const form = new ElementBuilder("form")
    .setId("form-name")
    .addClass("flex-col")
    .setAttr("method", "post")
    .append(new ElementBuilder("h2").setText("Enter your name"));

  [
    ...labelAndInput({
      labelText: "Name",
      inputType: "text",
      id: "player-name",
      name: "player-name",
      required: true,
    }),
  ].forEach((el) => form.append(el));

  form.append(
    new ElementBuilder("button")
      .addClass("sb-button")
      .setAttr("type", "submit")
      .setAttr("id", "button-start-game")
      .setText("Start Game"),
  );

  return form.build();
}
