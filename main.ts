let furnica = game.createSprite(2, 3)
while (true) {
    if (input.acceleration(Dimension.X) < 0) {
        furnica.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) > 0) {
        furnica.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) < 0) {
        furnica.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    if (input.acceleration(Dimension.X) > 0) {
        furnica.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
}
let bob = game.createSprite(randint(0, 4), randint(0, 4))
bob.set(LedSpriteProperty.Brightness, 180)
if (furnica.isTouching(bob)) {
    bob.set(LedSpriteProperty.X, randint(0, 4))
    bob.set(LedSpriteProperty.Y, randint(0, 4))
}
basic.forever(function () {
	
})
