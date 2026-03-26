myBlocks.blink_led()
myBlocks.blink_led()

def on_forever():
    myBlocks.blink_led()
basic.forever(on_forever)

serial.read_string()