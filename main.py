furnica = game.create_sprite(2, 3)
while True:
    if input.acceleration(Dimension.X) < 0:
        furnica.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    if input.acceleration(Dimension.X) > 0:
        furnica.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    if input.acceleration(Dimension.X) < 0:
        furnica.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    if input.acceleration(Dimension.X) > 0:
        furnica.change(LedSpriteProperty.X, 1)
        basic.pause(200)
bob = game.create_sprite(randint(0, 4), randint(0, 4))
bob.set(LedSpriteProperty.BRIGHTNESS, 180)
if furnica.is_touching(bob):
    bob.set(LedSpriteProperty.X, randint(0, 4))
    bob.set(LedSpriteProperty.Y, randint(0, 4))

def on_forever():
    pass
basic.forever(on_forever)
